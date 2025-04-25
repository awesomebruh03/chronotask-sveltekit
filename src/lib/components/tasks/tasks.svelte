<script>
  import TaskModal from "../../modals/tasksModal.svelte";
  import Icon from '@iconify/svelte';

  export let tasks = [];

  let showModal = false;

  function openTaskModal() {
    showModal = true;
  }

  function createTask(newTask) {
    tasks = [...tasks, newTask];
    showModal = false;
  }

  function deleteTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }
</script>

<div class="flex flex-col max-w-2xl ml-5 gap-5 p-5 bg-gray-200 h-full overflow-y-auto scrollbar-hidden">
  {#if tasks.length === 0}
    <p class="text-gray-500">No tasks available. Click the button below to add a task.</p>
  {/if}

  <button class="bg-blue-500 text-white px-4 py-2 rounded opacity-75 hover:opacity-100" on:click={openTaskModal}>Add Task</button>

  {#if showModal}
    <TaskModal 
      on:createTask={(event) => createTask(event.detail)} 
      on:close={() => (showModal = false)} 
    />
  {/if}

  {#each tasks as task, index}
    <div class="rounded-lg bg-white shadow-md p-4 flex justify-between items-center">
      <div>
        <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
        <p class="text-gray-600">{task.description}</p>
      </div>
      <button class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" on:click={() => deleteTask(index)}>Delete</button>
    </div>
  {/each}
</div>