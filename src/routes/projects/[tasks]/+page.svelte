<script>
    import Tasks from "$lib/components/tasks/tasks.svelte";
    import ProjectDescription from "$lib/components/tasks/projectDescription.svelte";
    import KanbanView from "$lib/components/KanbanView/kanbanview.svelte";
    let text = "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.";
    let showKanban = false;
    function toggleView() {
        showKanban = !showKanban;
    }
</script>

<div class="flex flex-col gap-4">
    <div class="flex justify-end">
        <button
            class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            on:click={toggleView}
        >
            {showKanban ? 'Show List View' : 'Show Kanban View'}
        </button>
    </div>
    {#if showKanban}
        <KanbanView />
    {:else}
        <div class="flex gap-2">
            <div class="flex-1">
                <Tasks />
            </div>
            <div class="flex-none">
                <ProjectDescription description={text}/>
            </div>
        </div>
    {/if}
</div>
