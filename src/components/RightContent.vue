<template>
    <div>
        <div v-for="n in 30" :key="n" class="pt-2">
            <v-card
                    class="pa-2"
                    outlined
                    tile
                    color="secondary"
                    height="100px"
            >
                <b class="white--text">
                    {{n}}
                </b>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightContent"
    }
</script>

<style scoped>

</style>