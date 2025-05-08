<script>
	import TaskSidebar from '$lib/components/Sidebar/TaskSidebar.svelte';
</script>

<div class="flex h-screen">
	<TaskSidebar />
	<main class="flex-1">
		<slot />
	</main>
</div>


