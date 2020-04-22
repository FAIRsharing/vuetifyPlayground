<template>
    <v-card
            class="pa-2 d-flex  align-center"
            outlined
            tile
            height="120px"
            elevation="3"
    >
        <div class="ml-2 pr-6">
            <circle-holder :status="RecordStatus"/>
        </div>
        <h3 class="pl-2 h3-text-color max-height max-width">Record title is a bit long! test {{n}}</h3>
        <section class="ml-4 d-flex flex-column">
            <h4 class="d-none">select Tag type</h4>
            <v-btn v-for="(item,index) in items" :key="index" :outlined="item.active" text class="button-text-color"
                   :color="item.active?'primary':null" @click="changeActiveItem(index)">{{item.title}}
            </v-btn>
        </section>
    </v-card>
</template>

<script>
    import CircleHolder from "./CircleHolder";

    export default {
        name: "RecordsCard",
        components: {CircleHolder},
        props: {
            RecordStatus: null,
        },
        data() {
            return {
                active: true,
                items: [{title: 'SUBJECT', active: false}, {title: 'DOMAIN', active: true}, {
                    title: 'TAXONOMY',
                    active: false
                }]
            }
        },
        methods: {
            changeActiveItem: function (itemIndex) {
                this.items.map(item => item.active = false);
                this.items[itemIndex].active = true;
            }
        }
    }
</script>

<style scoped>

</style>