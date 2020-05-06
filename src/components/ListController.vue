<template>
    <div class="d-flex  justify-center">
        <v-btn-toggle
                mandatory
        >
            <v-btn>
                <v-icon>mdi-format-align-left</v-icon>
            </v-btn>
        </v-btn-toggle>
        <v-pagination v-model="page"
                      :length="5"
        />
        <v-icon x-large @click="changeListType('stackList')" :class="{'active':isColumnList}">view_headline</v-icon>
        <v-icon x-large @click="changeListType('columnList')" style="font-size: 2.8rem" :class="{'active':!isColumnList}">view_column</v-icon>
    </div>
</template>

<script>
    export default {
        name: "ListController",
        data() {
            return {
                page: 1,
                isColumnList: false // need to go to store to have them synced in everywhere.
            }
        },
        methods: {
            changeListType: function (listType) {
                listType === 'stackList' ? this.isColumnList = false : this.isColumnList = true;
                this.$emit('ChangeListType', this.isColumnList)
            }
        }
    }
</script>

<style scoped>
    .active {
        color: lightgrey;
    }

    .theme--light.v-icon:focus::after{
        opacity: 0;
    }
</style>