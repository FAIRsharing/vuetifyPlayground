<template>
    <section>
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

</style>