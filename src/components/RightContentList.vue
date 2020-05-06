<template>
    <section >
        <h1 class="d-none">Records</h1>

        <!--Filtered Chips-->
        <div style="background: lightblue;width: 100%;height: 50px;display: flex;justify-content: center;align-items: center">
            place of filter Chip
        </div>

        <!--List Controller-->
        <ListController class="mt-2" @ChangeListType="changeListType"></ListController>

        <!--List Row-->
        <article >
            <h2 class="d-none">
                Result
            </h2>
            <section v-for="n in 30" :key="n" class="pt-2 pt-lg-3" >
                <RecordsCard :record-status="n%2===0?'ready':'deprecated'" :key="n"
                             v-bind:is-column-list=isColumnList></RecordsCard>
            </section>
        </article>

        <!--List Controller-->
        <ListController class="mt-2" @ChangeListType="changeListType"></ListController>

    </section>
</template>

<script>
    import RecordsCard from "./RecordsCard";
    import ListController from "./ListController";

    export default {
        name: "RightContentList",
        components: {ListController, RecordsCard},
        data() {
            return {
                isColumnList: false
            }
        },
        methods: {
            changeListType: function (listType) {
                this.isColumnList = listType;
            },}
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>