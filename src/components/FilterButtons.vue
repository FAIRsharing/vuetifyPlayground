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
                    v-for="(object,index) in filters"
                    :key="index"
            >
                <v-expansion-panel-header>{{ object.filter}}</v-expansion-panel-header>
                <v-expansion-panel-content class="pl-5 pr-5">

                    <v-list flat :class="{'fixed-scrollable-height':object.subFilters.length>5}">
                        <v-list-item-group v-model="filterSelected[object.filter]" color="primary" multiple>
                            <v-list-item
                                    v-for="(subObject, i) in object.subFilters"
                                    :key="i"
                                    @click="addParam(subObject.subFilter, subObject,object.filter)"
                            >
                                <v-list-item-content>
                                    <v-list-item-title class="text-primary"
                                                       v-text="subObject.subFilter"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-icon>
                                    <div :class="!subObject.active?'badge':'badge-active'">
                                            <span id="inventory"
                                                  class="text-primary ">{{subObject.inventory}}</span>
                                        <span v-if="subObject.active" class="triangle-left"></span>
                                    </div>
                                </v-list-item-icon>

                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                    <v-autocomplete
                            class="mt-2"
                            :items="retSubFilter(object.subFilters)"
                            v-model="selectedSubFilter"
                            solo
                            dense
                            clearable
                            v-if="object.subFilters.length>5"
                                  :placeholder="`Search through ${object.filter}`"
                    ></v-autocomplete>


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
                selectedSubFilter: null,
                items: [
                    {text: 'Real-Time', icon: 'mdi-clock'},
                    {text: 'Audience', icon: 'mdi-account'},
                    {text: 'Conversions', icon: 'mdi-flag'},
                    {text: 'Real-Time', icon: 'mdi-clock'},
                    {text: 'Audience', icon: 'mdi-account'},
                ],
                panel: [],
                filterSelected: {},
                filters: [
                    {
                        filter: 'GRANTS',
                        subFilters: [{
                            subFilter: 'subfilter-1',
                            icon: 'mdi-clock',
                            active: false,
                            inventory: 15
                        }, {subFilter: 'subfilter-2', icon: 'mdi-flag', active: false, inventory: 10}]
                    },
                    {
                        filter: 'LICENSES',
                        subFilters: [{
                            subFilter: 'subfilter-1',
                            icon: 'mdi-account',
                            active: false,
                            inventory: 100
                        }, {
                            subFilter: 'subfilter-2',
                            icon: 'mdi-flag',
                            active: false,
                            inventory: 10
                        }, {
                            subFilter: 'subfilter-3',
                            icon: 'mdi-flag',
                            active: false,
                            inventory: 95
                        }, {
                            subFilter: 'biology',
                            icon: 'mdi-account',
                            active: false,
                            inventory: 11
                        },
                            {
                                subFilter: 'refactor-4',
                                icon: 'mdi-account',
                                active: false,
                                inventory: 76
                            },
                            {
                                subFilter: 'research-3',
                                icon: 'mdi-flag',
                                active: false,
                                inventory: 54
                            }, {
                                subFilter: 'arad-4',
                                icon: 'mdi-account',
                                active: false,
                                inventory: 13
                            },
                            {
                                subFilter: 'test',
                                icon: 'mdi-account',
                                active: false,
                                inventory: 2
                            }]
                    },
                    {
                        filter: 'ORGANISATION(s)',
                        subFilters: [{
                            subFilter: 'organ',
                            icon: 'mdi-clock',
                            active: false,
                            inventory: 14
                        }, {subFilter: 'organ airplane', icon: 'mdi-flag', active: false, inventory: 10},
                            {subFilter: 'organ car', icon: 'mdi-flag', active: false, inventory: 7},
                            {subFilter: 'organ flat', icon: 'mdi-flag', active: false, inventory: 45},
                            {subFilter: 'organ aparat', icon: 'mdi-flag', active: false, inventory: 89},
                        ]
                    },
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
            retSubFilter(subFiltersObject){
                let outPut = [];
                subFiltersObject.forEach(object=>outPut.push(object.subFilter));
                return outPut;
            },
            selectFilter: function (index, selectedButtonsArray) {
                selectedButtonsArray.map(item => item.active = false);
                selectedButtonsArray[index].active = true;
            },
            // Create an array the length of our items
            // with all values as true
            all() {
                // console.log([...Object(this.filters.subFilters).values()])
                this.panel = [...Array(this.filters.length).keys()].map((k, i) => i)
            },
            // Reset the panel
            none() {
                this.panel = []
            },
            addParam: async function (subFilterName, subFilterObject, parentFilterName) {
                console.log('subFilterName', subFilterName);
                console.log('subFilterObject', subFilterObject);
                console.log('parentFilterName', parentFilterName)
                console.log('filterSelected', this.filterSelected);
                let clickedObject = this.filters.find(item => item.filter === parentFilterName)
                console.log('clickedObject', clickedObject);
                let clickedIndex = clickedObject.subFilters.findIndex(item => item.subFilter === subFilterName);
                console.log('clickedIndex', clickedIndex);
                console.log(clickedObject.subFilters[clickedIndex]);
                clickedObject.subFilters[clickedIndex].active = !clickedObject.subFilters[clickedIndex].active;
            },
            customFilter (item, queryText) {
                const textOne = item.name.toLowerCase()
                const textTwo = item.abbr.toLowerCase()
                const searchText = queryText.toLowerCase()

                return textOne.indexOf(searchText) > -1 ||
                    textTwo.indexOf(searchText) > -1
            },
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
            this.filters.forEach(item => {
                this.filterSelected[item.filter] = [];
            });
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

    .badge {
        width: 35px;
        height: 25px;
        background: white;
        border: #27aae1 solid 1px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        position: relative;

        #inventory {
            font-size: small;
            position: absolute;
            top: 6%;
            left: 20%;
        }
    }

    .badge-active {
        width: 35px;
        height: 24px;
        background: #27aae1;
        border: #27aae1 solid 1px;
        border-radius: 5px 5px 5px 5px;
        -moz-border-radius: 5px 5px 5px 5px;
        -webkit-border-radius: 5px 5px 5px 5px;
        position: relative;

        #inventory {
            color: white;
            font-size: small;
            position: absolute;
            top: 6%;
            left: 20%;
        }

    }

    .triangle-left {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 12px solid transparent;
        border-right: 15px solid #27aae1;
        border-bottom: 11px solid transparent;
        left: -30%;
    }

    .fixed-scrollable-height {
        max-height: 300px;
        overflow-y: scroll;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

</style>