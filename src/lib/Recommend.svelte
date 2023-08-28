<script lang="ts">
    export let mealtime: string;
    export let reason: string;
    export let menu: string;

    const title: string = `오늘 ${mealtime}, ${reason} <strong>"${menu}"</strong> 어때요?`;
</script>
        
<section>
    <h1 class="text-4xl">{@html title}</h1>
    <img src="https://picsum.photos/480/320" alt="random" />
</section>