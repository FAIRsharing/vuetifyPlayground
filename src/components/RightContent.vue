<template>
    <article>
        <section v-for="n in 30" :key="n" class="pt-2">
            <v-card
                    class="pa-2 d-flex  align-center"
                    outlined
                    tile
                    height="120px"
                    elevation="3"
            >
                <div class="ml-2 pr-6">
                    <circle-holder>
                    </circle-holder>
                </div>
            </v-card>
        </section>
    </article>
</template>

<script>
    import CircleHolder from "./CircleHolder";

    export default {
        name: "RightContent",
        components: {CircleHolder}
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>