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
                    v-for="(filter,index) in filters"
                    :key="index"
            >
                <v-expansion-panel-header>{{ filter.value }}</v-expansion-panel-header>
                <v-expansion-panel-content class="pl-5 pr-5">

                    <v-list dense>
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                            >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.text"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>

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
                items: [
                    { text: 'Real-Time', icon: 'mdi-clock' },
                    { text: 'Audience', icon: 'mdi-account' },
                    { text: 'Conversions', icon: 'mdi-flag' },
                    { text: 'Real-Time', icon: 'mdi-clock' },
                    { text: 'Audience', icon: 'mdi-account' },
                ],
                panel: [],
                filters: [{value:'GRANTS'},{value:'ORGANISATION(s)'},{value:'REGISTRY'},{value:'REGISTRY'},
                    {value:'SPECIES'},{value:'SPECIES'},{value:'ONTOLOGY SUBJECT(s)'},{value:'ONTOLOGY DOMAIN(s)'},{value:'COUNTRIES'}
                    ,{value:'JOURNAL(s)'},{value:'LICENCE(s)'},{value:'USER DEFINED TAGS'},{value:'TYPE OF RECORDS'}
                    ],
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
                this.panel = [...Object(this.filters).keys()].map((k, i) => i)
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
            // this.panel['0'] = 0;
             this.all();
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