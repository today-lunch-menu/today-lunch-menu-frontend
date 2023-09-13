<script lang="ts">
    import Layout from "./lib/Layout.svelte";
    import Recommend from "./lib/Recommend.svelte";
    import Map from "./lib/Map.svelte";

    const mealtime: string = "점심";
    const reason: string = "비오니까";
    const menu: string = "돼지국밥";
</script>

<Layout>
    <main>
        <Recommend mealtime={mealtime} reason={reason} menu={menu} />
        <Map menu={menu} />
    </main>
</Layout>
