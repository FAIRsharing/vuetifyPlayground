<template>
    <div>
        <!-- 3 row buttons     -->
        <div class="d-flex flex-row justify-start mb-1 mb-lg-2" v-for="filterHolderIndex in 3" :key="filterHolderIndex">
            <v-btn @click="selectFilter(index,buttonsGroup[filterHolderIndex-1])" color="primary"
                   class="mr-1 mr-lg-2"
                   :class="[index===0?'first-child':'flex-1',{'button-style-md-screens':mdScreens}]"
                   :outlined="!item.active"
                   v-for="(item,index) in buttonsGroup[filterHolderIndex-1]"
                   :key="index">{{item.title}}
            </v-btn>
        </div>
        <!-- 1 row buttons for records status    -->
        <div class="d-flex flex-row justify-start mb-1 mb-lg-2">
            <v-tooltip bottom v-for="(item,index) in buttonsRecordsState"
                       :key="index"
            >
                <template v-slot:activator="{ on }">
                    <v-btn color="primary"
                           @click="selectFilter(index,buttonsRecordsState)"
                           class="mr-1 mr-lg-2 "
                           :class="[index===0?'first-child':'flex-1',{'buttons-md-style':mdScreens && index!==0}]"
                           :outlined="!item.active"
                           v-on="on">
                        {{item.title}}
                    </v-btn>
                </template>
                <span>{{item.toolTip}}</span>
            </v-tooltip>
        </div>
        <v-expansion-panels
                v-model="panel"
                multiple
                flat
                hover
                accordion
        >
            <v-expansion-panel
                    v-for="(item,i) in items"
                    :key="i"
            >
                <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

    </div>
</template>

<script>
    export default {
        name: "FilterButtons",
        props: {mdScreens: null},
        data() {
            return {
                panel: [],
                items: 20,
                buttonsGroup: [
                    [{title: 'ALL', active: true}, {title: 'RECOMMENDED', active: false}, {
                        title: 'NOT RECOMMENDED',
                        active: false
                    }],
                    [{title: 'ALL', active: true}, {title: 'PUBLISHED', active: false}, {
                        title: 'NOT PUBLISHED',
                        active: false
                    }],
                    [{title: 'ALL', active: true}, {title: 'MAINTAINED', active: false}, {
                        title: 'NOT MAINTAINED',
                        active: false
                    }],
                ],
                buttonsRecordsState: [{
                    title: 'ALL', active: true, toolTip: 'Show All Records',
                }, {title: 'U', active: false, toolTip: 'Show Uncertain Records'}, {
                    title: 'D',
                    active: false,
                    toolTip: 'Show Deprecated Records'
                }, {
                    title: 'I',
                    active: false,
                    toolTip: 'Show In Development Records'
                }, {
                    title: 'R',
                    active: false,
                    toolTip: 'Show Ready Records'
                }]
            }
        },
        methods: {
            selectFilter: function (index, selectedButtonsArray) {
                selectedButtonsArray.map(item => item.active = false);
                selectedButtonsArray[index].active = true;
            },
            // Create an array the length of our items
            // with all values as true
            all() {
                this.panel = [...Array(this.items).keys()].map((k, i) => i)
            },
            // Reset the panel
            none() {
                this.panel = []
            }
        },
        computed: {
            getRecordStatus: function () {
                return this.statusStyles['ready'];
            }
        },
        created() {
            //open first expandable panel.
            this.panel['0'] = 0;
            // this.all();
        }
    }
</script>

<style scoped lang="scss">


    .button-style-md-screens {
        font-size: 9px !important;
    }

    .first-child {
        font-size: 11px;
        width: 16.5%;
    }

    .flex-1 {
        font-size: 11px;
        flex: 1;
    }

    .buttons-md-style {
        min-width: 32px !important;
    }

    #status-style {
        color: white;
        position: absolute;
        top: 20%;
        left: 35%;
        font-size: 20px;
        cursor: help;
    }
</style>