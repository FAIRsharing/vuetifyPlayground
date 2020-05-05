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
        <v-icon x-large>view_headline</v-icon>
        <v-icon x-large style="color: lightgrey;font-size: 2.9rem">view_column</v-icon>
    </div>
</template>

<script>
    export default {
        name: "ListController",
        data() {
            return {
                page: 1,
            }
        },
    }
</script>

<style scoped>
    section {
    }
</style>