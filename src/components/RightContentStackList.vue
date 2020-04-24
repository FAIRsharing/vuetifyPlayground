<template>
    <section>
        <h1 class="d-none">Records</h1>

        <!--Filtered Chips-->
        <div style="background: lightblue;width: 100%;height: 50px;display: flex;justify-content: center;align-items: center">
            place of filter Chip
        </div>

        <!--List Controller-->
        <ListController class="mt-2"></ListController>

        <!--List Row-->
        <article>
            <h2 class="d-none">
                Result
            </h2>
            <section v-for="n in 30" :key="n" class="pt-2 pt-lg-3">
                <RecordsCard :record-status="n%2===0?'ready':'deprecated'" :key="n"></RecordsCard>
            </section>
        </article>

        <!--List Controller-->
        <ListController class="mt-2"></ListController>

    </section>
</template>

<script>
    import RecordsCard from "./RecordsCard";
    import ListController from "./ListController";

    export default {
        name: "RightContentStackList",
        components: {ListController, RecordsCard},
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>