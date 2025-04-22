<script>
  import RangeDatepicker from "./RangeDatepicker.svelte";

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
</script>

<div class="flex flex-col space-y-4 w-dvh  bg-gray-50 shadow-md p-4 rounded-md">
  <div class="flex flex-col space-y-2">
    <label for="title" class="text-sm font-medium text-gray-700">Title:</label>
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

  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Submit</button>
</div>