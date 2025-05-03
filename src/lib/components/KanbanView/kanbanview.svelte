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
</script>

<style>
  .kanban-board {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f8f9fa;
  }

  .kanban-column {
    flex: 1;
    background: #e9ecef;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .kanban-column h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #495057;
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
      <button on:click={() => addTask(column.id, `New Task in ${column.title}`)}>Add Task</button>
    </div>
  {/each}
</div>

<div class="add-controls">
  <input type="text" placeholder="New Column Title" bind:value={newColumnTitle} />
  <button on:click={() => addColumn(newColumnTitle)}>Add Column</button>
</div>