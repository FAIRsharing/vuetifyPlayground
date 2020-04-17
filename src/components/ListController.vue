<template>
    <section class="d-flex  justify-center">
        <v-btn-toggle
                v-model="toggle_exclusive"
                mandatory
        >
            <v-btn>
                <v-icon>mdi-format-align-left</v-icon>
            </v-btn>
        </v-btn-toggle>

        <v-pagination v-model="page"
                      :length="5"
        />
        <v-btn-toggle
                v-model="toggle_exclusive"
                mandatory
        >
            <v-btn>
                <v-icon>mdi-format-align-left</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-format-align-center</v-icon>
            </v-btn>
            <v-btn>
                <v-icon>mdi-format-align-right</v-icon>
            </v-btn>

        </v-btn-toggle>
    </section>
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