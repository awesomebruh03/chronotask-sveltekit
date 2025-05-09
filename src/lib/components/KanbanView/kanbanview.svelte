<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Sample data for the Kanban board
  let columns = writable([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        { id: 'task1', title: 'Task 1' },
        { id: 'task2', title: 'Task 2' }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        { id: 'task3', title: 'Task 3' }
      ]
    },
    {
      id: 'complete',
      title: 'Complete',
      tasks: [
        { id: 'task4', title: 'Task 4' }
      ]
    }
  ]);

  // Drag and drop logic
  let draggedTask = null;
  let draggedFromColumn = null;

  function handleDragStart(task, column) {
    draggedTask = task;
    draggedFromColumn = column;
  }

  function handleDrop(targetColumn) {
    if (draggedTask && draggedFromColumn !== targetColumn) {
      columns.update(cols => {
        const fromCol = cols.find(col => col.id === draggedFromColumn.id);
        const toCol = cols.find(col => col.id === targetColumn.id);

        // Remove task from the original column
        fromCol.tasks = fromCol.tasks.filter(task => task.id !== draggedTask.id);

        // Add task to the target column
        toCol.tasks.push(draggedTask);

        return cols;
      });
    }
    draggedTask = null;
    draggedFromColumn = null;
  }

  // Add new task
  function addTask(columnId, taskTitle) {
    columns.update(cols => {
      const column = cols.find(col => col.id === columnId);
      if (column) {
        const newTask = { id: `task${Date.now()}`, title: taskTitle };
        column.tasks.push(newTask);
      }
      return cols;
    });
  }

  // Add new column
  function addColumn(columnTitle) {
    columns.update(cols => {
      const newColumn = {
        id: `column${Date.now()}`,
        title: columnTitle,
        tasks: []
      };
      cols.push(newColumn);
      return cols;
    });
  }

  let newColumnTitle = '';
  let showAddColumn = false;
</script>

<style>
  .kanban-board {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
    height: 60vh;
    /* Fixed height for the board */
    overflow-x: auto;
  }

  .kanban-column {
    flex: 1;
    background: #e9ecef;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    max-height: 100%;
    min-width: 250px;
  }

  .kanban-column h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #495057;
  }

  .kanban-tasks-list {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 1rem;
  }

  .kanban-task {
    background: white;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: grab;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .kanban-task-title {
    font-size: 1rem;
    font-weight: bold;
    color: #212529;
  }

  .add-controls {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }
</style>

<div class="kanban-board">
  {#each $columns as column}
    <div
      class="kanban-column"
      role="region"
      aria-label="{column.title} column"
      on:dragover|preventDefault
      on:drop={() => handleDrop(column)}
    >
      <h3>{column.title}</h3>
      <div class="kanban-tasks-list">
        {#each column.tasks as task}
          <div
            class="kanban-task"
            role="button"
            tabindex="0"
            aria-label="Drag {task.title}"
            draggable="true"
            on:dragstart={() => handleDragStart(task, column)}
          >
            <div class="kanban-task-title">{task.title}</div>
          </div>
        {/each}
      </div>
      <div class="flex justify-center w-full">
        <button
          class="mt-2 flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg px-4 py-2 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
          on:click={() => addTask(column.id, `New Task in ${column.title}`)}
          aria-label={`Add Task to ${column.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          Add Task
        </button>
      </div>
    </div>
  {/each}
  <!-- Add Column Inline Input -->
  <div class="kanban-column flex flex-col items-center justify-start min-w-[250px] bg-white border-2 border-dashed border-blue-400 p-4 rounded-lg">
    <input
      type="text"
      placeholder="New Column Title"
      bind:value={newColumnTitle}
      class="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
      on:keydown={(e) => { if (e.key === 'Enter' && newColumnTitle.trim()) { addColumn(newColumnTitle.trim()); newColumnTitle = ''; } }}
    />
    <button
      class="w-full rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
      on:click={() => { if (newColumnTitle.trim()) { addColumn(newColumnTitle.trim()); newColumnTitle = ''; } }}
    >
      Add Column
    </button>
  </div>
</div>