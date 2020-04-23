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
        <h3 class="pl-2   max-height max-width">Record title as as asas test long {{n}}</h3>
        <section class="ml-2 mr-4 d-flex flex-column">
            <h4 class="d-none">select Tag type</h4>
            <v-btn v-for="(item,index) in buttons" :key="index" :outlined="item.active" text class="button-text-color"
                   :color="item.active?'primary':null" @click="changeActiveItem(index)">{{item.title}}
            </v-btn>
        </section>
        <section class="chips-container">
            <h5 class="d-none">Choose Subject , Domain , Taxonomy </h5>
            <v-chip-group
                    column
                    multiple
            >
                <v-chip small text-color="secondary" color="secondary" v-for="(chip,index) in Chips[currentActiveChips]"
                        :key="index"
                        filter
                        outlined @click="toggleChipActiveness(chip)">{{chip.title}}
                </v-chip>
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
                buttons: [{title: 'SUBJECTS', active: false}, {title: 'DOMAINS', active: true}, {
                    title: 'TAXONOMIES',
                    active: false,
                }],
                Chips: {
                    SUBJECTS: [
                        {title: 'subject-Chip1', active: false}, {title: 'subject-Chip2', active: false},
                    ],
                    DOMAINS: [
                        {title: 'domain-Chip1', active: false}, {title: 'domain-Chip2', active: false},
                        {title: 'domain-Chip3', active: false}, {title: 'domain-Chip4', active: false},
                    ],
                    TAXONOMIES: [
                        {title: 'taxonomies-Chip1', active: false}, {title: 'taxonomies-Chip2', active: false},
                        {title: 'taxonomies-Chip3', active: false}, {title: 'taxonomies-Chip4', active: false},
                        {title: 'taxonomies-Chip5', active: false}, {title: 'taxonomies-Chip6', active: false},
                        {title: 'taxonomies-Chip7', active: false}, {title: 'taxonomies-Chip8', active: false},
                        {title: 'taxonomies-Chip9', active: false}, {title: 'taxonomies-Chip10', active: false},
                        {title: 'taxonomies-Chip11', active: false}, {title: 'taxonomies-Chip12', active: false},
                    ],
                },
                currentActiveChips: 'DOMAINS'
            }
        },
        methods: {
            changeActiveItem: function (itemIndex) {
                this.buttons.map(item => item.active = false);
                this.buttons[itemIndex].active = true;
                // changing currentChips data
                this.currentActiveChips = this.buttons[itemIndex].title;
            },
            toggleChipActiveness: function (itemIndex) {
                let selectedItem = this.items.find(item => item === itemIndex);
                this.items.map(item => item === selectedItem ? item.active = !item.active : item.active = true);
            }
        }
    }
</script>

<style scoped>
    .chips-container {
        height: 110px;
        width: 80%;
        overflow-x: hidden;
    }
</style>