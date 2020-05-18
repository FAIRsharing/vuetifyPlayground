<template>
    <!--Column List-->
    <v-col class="mt-1" cols="12" sm="12" md="6" lg="4" xl="3">
        <v-card
                class="pa-2 d-flex  align-center flex-column"
                outlined
                tile
                :hover="allowClicking"
        >
            <!-- Title and Icon -->
            <v-row no-gutters class="full-width">
                <v-col cols="12" @mouseenter="allowClicking=true"
                       @mouseleave="allowClicking=false">
                    <div class=" d-flex flex-column align-center justify-center">
                        <circle-holder :status="RecordStatus"/>
                        <h3 class="max-height "><u>Record title example</u></h3>
                    </div>
                </v-col>
            </v-row>
            <!-- Buttons -->
            <v-row>
                <v-col>
                    <section class="ml-2 mb-0 mr-4 d-flex flex-column">
                        <h4 class="d-none">select Tag type</h4>
                        <v-btn v-for="(item,index) in buttons" :key="index" :outlined="item.active" text
                               class="button-text-color"
                               :color="item.active?'primary':null" @click="changeActiveItem(index)">{{item.title}}
                        </v-btn>
                    </section>
                </v-col>
            </v-row>
            <!--Chips-->
            <v-row no-gutters>
                <v-col>
                    <section class="chips-container">
                        <h5 class="d-none">Choose Subject , Domain , Taxonomy </h5>
                        <v-chip-group
                                column
                        >
                            <v-chip small text-color="secondary" color="secondary"
                                    v-for="chip in Chips[currentActiveChips]"
                                    :key="chip.title"
                                    :close="chip.active"
                                    outlined @click="toggleChipActiveness(chip)">{{chip.title}}
                            </v-chip>
                        </v-chip-group>
                    </section>
                </v-col>
            </v-row>
            <!--       Description -->
            <div class="d-flex flex-row" style="width: 70%">
                <v-divider
                        class="mt-2"
                ></v-divider>
            </div>
            <p class="ma-2 description text-justify">
                {{description}}
            </p>
        </v-card>
    </v-col>

</template>

<script>
    import CircleHolder from "./CircleHolder";

    export default {
        name: "RecordsCardColumn",
        components: {CircleHolder},
        props: {
            RecordStatus: null,
        },
        data() {
            return {
                allowClicking: false,
                buttons: [{title: 'SUBJECTS', active: false}, {title: 'DOMAINS', active: true}, {
                    title: 'TAXONOMIES',
                    active: false,
                }],
                description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer ... ',
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
                currentActiveChips: 'DOMAINS',
                vChipActive: 'v-chip--active'
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
                let selectedItem = this.Chips[this.currentActiveChips].find(item => item === itemIndex);
                this.Chips[this.currentActiveChips].map(item => {
                    if (item === selectedItem) {
                        item.active = !item.active;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .chips-container {
        height: 110px;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    .v-chip.v-chip--outlined.v-chip--active::before {
        opacity: 0;
    }
</style>