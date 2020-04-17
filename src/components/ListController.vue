<template>
    <section class="d-flex  ">
        <v-pagination v-model="page"
                      :length="5"
        />
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