<script>
	import Icon from '@iconify/svelte';
	let isOpen = false;

	function toggleSidebar() {
		isOpen = !isOpen;
	}
	let menuItems = [
		{
			name: 'Dashboard',
			link: '/dashboard',
			icon: 'fa-solid:chart-line',
		},
		{
			name: 'Tasks',
			link: '/tasks',
			icon: 'fa-solid:tasks',
		},
		{
			name: 'Settings',
			link: '/settings',
			icon: 'fa-solid:cog',
		},
	];
</script>
<div
  class="sidebar transition-width h-screen bg-gray-700 text-white duration-300 flex flex-col items-center {isOpen
    ? 'w-64'
    : 'w-16'}"
>
  <!-- Button Container -->
  <div class="w-full flex justify-center py-4">
    <button 
      on:click={toggleSidebar} 
      class="p-2 hover:bg-gray-600 rounded-full transition-colors"
    >
      <span class="flex items-center">
        <Icon 
          icon={isOpen ? "fa-bars" : "fa6-solid:align-left"} 
          class="w-6 h-6 transform transition-transform duration-300"
        />
      </span>
    </button>
  </div>

  <!-- Simplified Menu List -->
  <ul class="w-full flex flex-col space-y-4 px-2">
    {#each menuItems as item}
      <li class="group hover:bg-gray-600 rounded-lg transition-colors">
        <a href={item.link} class="flex items-center gap-2 p-2">
          <Icon icon={item.icon} width="24" height="24" />
          {#if isOpen}
            <span class="text-sm group-hover:text-xl transition-all">{item.name}</span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</div>