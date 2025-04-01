<script>
    import { onMount } from "svelte";
    import flatpickr from "flatpickr";
    import "flatpickr/dist/flatpickr.min.css";

    export let startDate = "";
    export let endDate = "";
    let startDatepicker, endDatepicker;

    onMount(() => {
        startDatepicker = flatpickr("#start-datepicker", {
            enableTime: true,
            dateFormat: "Y-m-d h:i K",
            time_24hr: false,
            defaultHour: 12,
            minuteIncrement: 5,
            scrollTime: true,
            allowInput: true,
            onChange: (selectedDates, dateStr) => {
                startDate = dateStr;
            }
        });

        endDatepicker = flatpickr("#end-datepicker", {
            enableTime: true,
            dateFormat: "Y-m-d h:i K",
            time_24hr: false,
            defaultHour: 12,
            minuteIncrement: 5,
            scrollTime: true,
            allowInput: true,
            onChange: (selectedDates, dateStr) => {
                endDate = dateStr;
            }
        });
    });

    $: if (startDatepicker && startDate) {
        startDatepicker.setDate(startDate, false);
    }

    $: if (endDatepicker && endDate) {
        endDatepicker.setDate(endDate, false);
    }
</script>

<div class="flex flex-col space-y-4">
  <div class="flex flex-col space-y-2">
    <label for="start-datepicker" class="text-sm font-medium text-gray-700">
      Select Start Date & Time:
    </label>
    <input
      id="start-datepicker"
      type="text"
      class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 placeholder-gray-400 transition duration-200"
      placeholder="Pick a start date"
    />
  </div>

  <div class="flex flex-col space-y-2">
    <label for="end-datepicker" class="text-sm font-medium text-gray-700">
      Select End Date & Time:
    </label>
    <input
      id="end-datepicker"
      type="text"
      class="border border-gray-300 rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm text-gray-800 placeholder-gray-400 transition duration-200"
      placeholder="Pick an end date"
    />
  </div>
</div>
