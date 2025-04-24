<script>
    import Tasks from "$lib/components/tasks/tasks.svelte";
    import ProjectDescription from "$lib/components/tasks/projectDescription.svelte";
    let text = "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit."
</script>

<div class="flex gap-2">
    <div class="flex-1">
        <Tasks />
    </div>
    <div class="flex-none">
        <ProjectDescription description="{text}"/>
    </div>
</div>
