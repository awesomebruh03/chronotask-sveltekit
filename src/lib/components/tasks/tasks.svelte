<script>
  import TaskModal from "../../models/tasks.svelte";
  import  Icon  from '@iconify/svelte';

  export let barColor = 'bg-gray-700'; // Tailwind class for dark gray
  export let barMargin = 'my-1'; // Tailwind class for margin (top and bottom)

  let tasks = [
    { name: "Task 1", description: "Description for Task 1", startDate: "2023-10-01T10:00", endDate: "2023-10-01T12:00", status: "in-progress" },
    { name: "Task 2", description: "Description for Task 2", startDate: "2023-10-02T14:00", endDate: "2023-10-02T16:00", status: "completed" },
    { name: "Task 3", description: "Description for Task 3", startDate: "2023-10-03T09:00", endDate: "2023-10-03T11:00", status: "pending" }
  ];

  let showModal = false;

  function addTask() {
    tasks = [
      ...tasks,
      { name: "New Task", description: "Description for New Task", startDate: "2025-04-22T10:00", endDate: "2025-04-22T12:00", status: "on-hold" }
    ];
  }

  function openTaskModal() {
    showModal = true;
  }

  function createTask(newTask) {
    tasks = [...tasks, newTask];
    showModal = false;
  }
</script>

<style>
  /* Hide scrollbar but keep scrolling */
  .scrollbar-hidden::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Opera */
  }

  .scrollbar-hidden {
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
    scrollbar-width: none; /* For Firefox */
  }
</style>

<div class="flex flex-col max-w-2xl ml-5 gap-5 p-5 bg-gray-200 h-full overflow-y-auto scrollbar-hidden">
  <button class="bg-blue-500 text-white px-4 py-2 rounded opacity-75 hover:opacity-100" on:click={openTaskModal}>Add Task</button>

  {#if showModal}
    <TaskModal 
      on:createTask={(event) => createTask(event.detail)} 
      on:close={() => (showModal = false)} 
    />
  {/if}

  <div class="flex flex-col">
    <div class="font-bold mb-1">In progress</div>
    {#each tasks.filter(task => task.status === "in-progress") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col">
    <div class="font-bold mb-1">Completed</div>
    {#each tasks.filter(task => task.status === "completed") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col">
    <div class="font-bold mb-1">Pending</div>
    {#each tasks.filter(task => task.status === "pending") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col">
    <div class="font-bold mb-1">On Hold</div>
    {#each tasks.filter(task => task.status === "on-hold") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col">
    <div class="font-bold mb-1">Cancelled</div>
    {#each tasks.filter(task => task.status === "cancelled") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>

  <div class="flex flex-col">
    <div class="font-bold mb-1">Overdue</div>
    {#each tasks.filter(task => task.status === "overdue") as task}
      <div class={`rounded-lg ${barColor} ${barMargin} p-4 bg-white shadow-md`}>
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold text-gray-700">{task.name}</h3>
          <p class="text-gray-600">{task.description}</p>
          <div class="text-sm text-gray-500">
            <p>Start: {task.startDate}</p>
            <p>End: {task.endDate}</p>
          </div>
          <button
            class="text-red-500 hover:text-red-700 text-sm font-bold flex items-center"
            on:click={() => tasks = tasks.filter(t => t !== task)}
          >
          <Icon icon="mynaui:trash" width="24" height="24" />
          </button>
        </div>
      </div>
    {/each}
  </div>
</div>