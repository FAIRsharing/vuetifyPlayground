<template>
    <article>
        <h2 class="d-none">
            Result
        </h2>
        <section v-for="n in 30" :key="n" class="pt-2">
            <v-card
                    class="pa-2 d-flex  align-center"
                    outlined
                    tile
                    height="120px"
                    elevation="3"
            >
                <div class="ml-2 pr-6">
                    <circle-holder :status="n%2===0?statuses[0]:statuses[1]" :key="n"/>
                </div>
                <h3 class="pl-2" style="color: gray;font-size: 1.3em">Record Title {{n}}</h3>
            </v-card>
        </section>
    </article>
</template>

<script>
    import CircleHolder from "./CircleHolder";

    export default {
        name: "RightContent",
        components: {CircleHolder},
        data() {
            return {
                statuses: ['ready', 'deprecated']
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }


</style>