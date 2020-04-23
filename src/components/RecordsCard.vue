<template>
    <v-card
            class="pa-2 d-flex  align-center"
            outlined
            tile
            height="130px"
            elevation="3"
    >
        <div class="ml-2 pr-6">
            <circle-holder :status="RecordStatus"/>
        </div>
        <h3 class="pl-2   max-height max-width" >Record title  as as asas test long {{n}}</h3>
        <section class="ml-2 mr-4 d-flex flex-column">
            <h4 class="d-none">select Tag type</h4>
            <v-btn v-for="(item,index) in buttons" :key="index" :outlined="item.active" text class="button-text-color"
                   :color="item.active?'primary':null" @click="changeActiveItem(index)">{{item.title}}
            </v-btn>
        </section>
        <section class="chips-container">
            <h5 class="d-none">Choose Subject , Domain , Taxonomy  </h5>
            <v-chip-group
                    column
                    multiple
            >
                <v-chip small text-color="secondary" color="secondary" v-for="(item,index) in 5" :key="index" filter outlined>{{item}}</v-chip>
            </v-chip-group>
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
                buttons: [{title: 'SUBJECT', active: false}, {title: 'DOMAIN', active: true}, {
                    title: 'TAXONOMY',
                    active: false,
                }],
                // amenities: ['1, 4'],
            }
        },
        methods: {
            changeActiveItem: function (itemIndex) {
                this.buttons.map(item => item.active = false);
                this.buttons[itemIndex].active = true;
            }
        }
    }
</script>

<style scoped>
    .chips-container{
        height: 110px;
        width: 80%;
        overflow-x: hidden;
    }
</style>