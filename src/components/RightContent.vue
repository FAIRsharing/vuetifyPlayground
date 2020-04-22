<template>
    <article>
        <h2 class="d-none">
            Result
        </h2>
        <section v-for="n in 30" :key="n" class="pt-2 pt-lg-3">
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
                <h3 class="pl-2 h3-text-color max-height-large max-width">Record title is  a bit long! test {{n}}</h3>
                <section class="ml-4 d-flex flex-column">
                    <h4 class="d-none">select Tag type</h4>
                    <v-btn  text  color="primary">SUBJECT</v-btn>
                    <v-btn  outlined color="primary">DOMAIN</v-btn>
                    <v-btn  text  color="primary">TAXONOMY</v-btn>
                </section>
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