<template>
    <v-btn
            fab
            color="primary"
            bottom
            right
            fixed
            class="mr-2"
            @click="dialog = !dialog"
    >
        <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

</template>

<script>
    export default {
        name: "JumpTop"
    }
</script>

<style scoped>
</style>