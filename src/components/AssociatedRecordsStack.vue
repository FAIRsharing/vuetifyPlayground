<template>
    <div>
        <h3>Associated Records</h3>
        <div class="associated-records-holder">
            <div :key="associatedRecord.title" v-for="associatedRecord in associatedRecords" class="associated-records">
                <span>{{associatedRecord.title}}</span>
                <b>{{associatedRecord.amount}}</b>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AssociatedRecordsStack",
        props: {
            associatedRecords: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style scoped lang="scss">

    .associated-records-holder {
        display: flex;
        flex-direction: row;

        .associated-records {
            margin-right: 5px;
            background: rgb(2, 0, 36);
            background: linear-gradient(rgba(102, 137, 153, 0.5), rgba(102, 137, 153, 0.2));
            padding: 2px 10px 2px 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;

            span {
                color: white;
                padding-right: 5px;
            }

            b {
                background: rgba(39, 170, 225, 0.5);
                color: white;
            }
        }
    }

    h3 {
        color: rgba(170, 170, 170, 0.5);
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
    }

</style>