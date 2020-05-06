<template>
        <!--Column List-->
    <v-col cols="12" sm="12" md="6" lg="4" xl="3">
        <v-card
                class="pa-2 d-flex  align-center flex-column"
                outlined
                tile
                :hover="allowClicking"
                height="298"
        >
            <!--       Description -->
            <div class="d-flex flex-row" style="width: 70%">
                <v-divider
                        class="mt-2"
                ></v-divider>
            </div>
            <p class="mt-2 description">
                {{description}}
            </p>
        </v-card>
    </v-col>

</template>

<script>
    // import CircleHolder from "./CircleHolder";

    export default {
        name: "RecordsCardColumn",
        // components: {CircleHolder},
        props: {
            isColumnList: {default: false, type: Boolean},
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