<script>
  import RangeDatepicker from "./RangeDatepicker.svelte";
  import { createEventDispatcher } from 'svelte';

  export let task = {
    title: "",
    description: "",
    status: "PENDING",
    priority: 0,
    startAt: "",
    endAt: "",
    userId: "",
    projectId: null,
    recurrenceRuleId: null
  };

  const priorities = ["Low", "Medium", "High"];
  const statuses = ["PENDING", "IN_PROGRESS", "COMPLETED", "ON_HOLD", "CANCELLED", "OVERDUE"];

  const dispatch = createEventDispatcher();

  function handleSubmit() {
    const titleInput = document.getElementById('title');
    const errorText = document.getElementById('title-error');

    if (!task.title.trim()) {
      titleInput.classList.add('border-red-500', 'animate-shake');
      errorText.classList.remove('hidden');
      return;
    }

    titleInput.classList.remove('border-red-500', 'animate-shake');
    errorText.classList.add('hidden');

    const newTask = {
      name: task.title,
      description: task.description,
      startDate: task.startAt,
      endDate: task.endAt,
      status: task.status.toLowerCase() // Ensure status matches the filtering logic
    };
    dispatch('createTask', newTask);
  }
</script>

<div
  class="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50"
  role="dialog"
  tabindex="0"
>
  <div
    class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
    role="document"
  >
    <!-- Close button -->
    <button
      class="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
      aria-label="Close"
      on:click={() => dispatch('close')}
    >
      &times;
    </button>

    <!-- Modal content -->
    <div class="flex flex-col space-y-4">
      <div class="flex flex-col space-y-2">
        <label for="title" class="text-sm font-medium text-gray-700">Title:</label>
        <p id="title-error" class="hidden text-red-500 text-sm">Title is required</p>
        <input
          id="title"
          type="text"
          bind:value={task.title}
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 placeholder-gray-400 transition duration-200"
          placeholder="Enter task title"
        />
      </div>

      <div class="flex flex-col space-y-2">
        <label for="description" class="text-sm font-medium text-gray-700">Description:</label>
        <textarea
          id="description"
          bind:value={task.description}
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 placeholder-gray-400 transition duration-200"
          placeholder="Enter task description"
        ></textarea>
      </div>

      <div class="flex flex-col space-y-2">
        <label for="status" class="text-sm font-medium text-gray-700">Status:</label>
        <select
          id="status"
          bind:value={task.status}
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 transition duration-200"
        >
          {#each statuses as status}
            <option value={status}>{status}</option>
          {/each}
        </select>
      </div>

      <div class="flex flex-col space-y-2">
        <label for="priority" class="text-sm font-medium text-gray-700">Priority:</label>
        <select
          id="priority"
          bind:value={task.priority}
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 transition duration-200"
        >
          {#each priorities as priority, index}
            <option value={index}>{priority}</option>
          {/each}
        </select>
      </div>

      <RangeDatepicker bind:startDate={task.startAt} bind:endDate={task.endAt} />

      <button
        type="button"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        on:click={handleSubmit}
      >
        Submit
      </button>
    </div>
  </div>
</div>