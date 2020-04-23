<template>
    <article>
        <h2 class="d-none">
            Result
        </h2>
        <section v-for="n in 30" :key="n" class="pt-2 pt-lg-3">
            <RecordsCard :record-status="n%2===0?'ready':'deprecated'" :key="n"></RecordsCard>
        </section>
    </article>
</template>

<script>
    import RecordsCard from "./RecordsCard";

    export default {
        name: "RightContent",
        components: {RecordsCard},
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>