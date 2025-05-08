<!-- src/routes/__layout.svelte -->
<script>
	import '../app.css';
	import Header from '$lib/components//Header/Header.svelte';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
</script>

<div class="flex flex-col md:flex-row h-screen">
	<!-- Sidebar with fixed width and full height -->
	<Sidebar />

	<!-- Main content area -->
	<div class="flex flex-1 flex-col overflow-hidden">
		<!-- Fixed header -->
		<Header />

		<!-- Scrollable content area -->
		<main class="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
			<slot />
		</main>
	</div>
</div>
