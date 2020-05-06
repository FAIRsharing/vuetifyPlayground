<template>
    <section>
        <h1 class="d-none">Records</h1>

        <!--Filtered Chips-->
        <div style="background: lightblue;width: 100%;height: 50px;display: flex;justify-content: center;align-items: center">
            place of filter Chip
        </div>

        <!--List Controller-->
        <ListController class="mt-2" @ChangeListType="changeListType"></ListController>

        <!--List Row-->
        <article v-if="!isColumnList">
            <h2 class="d-none">
                Result
            </h2>
            <section v-for="n in 30" :key="n" class="pt-3 pt-lg-4">
                <RecordsCard :record-status="n%2===0?'ready':'deprecated'" :key="n"></RecordsCard>
            </section>
        </article>

        <v-row class="" v-if="isColumnList"
        >
            <RecordsCardColumn v-for="n in 30" :key="n"></RecordsCardColumn>
        </v-row>

        <!--List Controller-->
<!--        <ListController class="mt-2 " @ChangeListType="changeListType"></ListController>-->

    </section>
</template>

<script>
    import RecordsCard from "./RecordsCard";
    import ListController from "./ListController";
    import RecordsCardColumn from "./RecordsCardColumn";

    export default {
        name: "RightContentList",
        components: {RecordsCardColumn, ListController, RecordsCard},
        data() {
            return {
                isColumnList: false
            }
        },
        methods: {
            changeListType: function (listType) {
                this.isColumnList = listType;
            },
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>