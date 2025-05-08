<script>
    export let description = "";
</script>

<div class="h-52 w-[25rem] flex flex-col items-center justify-start bg- p-4">
    <div class="w-full h-full bg-white shadow-md rounded-md flex flex-col  overflow-hidden transition-all duration-300 hover:overflow-y-auto ring-4 ring-transparent hover:ring-4 hover:ring-offset-2 hover:ring-transparent hover:animate-neon">
        <div class="p-4 flex-grow overflow-hidden text-ellipsis break-words  text-center">
            <p class="text-gray-600 text-sm overflow-hidden text-ellipsis break-words line-clamp-6 hover:line-clamp-none">{description}</p>
        </div>
    </div>
</div>

<style>
@keyframes neon {
    0% {
        box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
    }
    25% {
        box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff;
    }
    50% {
        box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00;
    }
    75% {
        box-shadow: 0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 20px #ffff00, 0 0 40px #ffff00;
    }
    100% {
        box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff;
    }
}

.hover\:animate-neon:hover {
    animation: neon 2s infinite;
}
</style>