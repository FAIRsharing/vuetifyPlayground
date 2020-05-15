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
            <ExpansionPanel
                    v-for="object in searchSubFilters"
                    :key="object.filter+'_'+object.updateKey"
                    :object="object"
                    @AddParam="addParam"
            />
        </v-expansion-panels>
    </div>
</template>

<script>
    import ExpansionPanel from "./ExpansionPanel";

    export default {
        name: "FilterButtons",
        components: {ExpansionPanel},
        props: {mdScreens: null},
        data() {
            return {
                searchTerm: '',
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
                        filterSelected: {},
                        searchTerm: null,
                        updateKey: 0,
                        subFilters: [{
                            subFilter: 'subfilter-1',
                            icon: 'mdi-clock',
                            active: false,
                            inventory: 15
                        }, {subFilter: 'subfilter-2', icon: 'mdi-flag', active: false, inventory: 10}]
                    },
                    {
                        filter: 'LICENSES',
                        filterSelected: {},
                        searchTerm: null,
                        updateKey: 0,
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
                        filterSelected: {},
                        updateKey: 0,
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
            retSubFilter(subFiltersObject) {
                let outPut = [];

                try {
                    if (subFiltersObject.filterSelected) {
                        console.log('subFiltersObject from ret ', subFiltersObject.filterSelected)
                        if (!subFiltersObject.filterSelected.length) { // if there is nothing in search box
                            subFiltersObject.subFilters.forEach(object => outPut.push(object.subFilter));
                        } else {
                            // subFiltersObject.subFilters.forEach(object => object.subFilter.toLowerCase().includes(subFiltersObject.filterSelected)
                            subFiltersObject.subFilters.filter(item => {
                                    return item.subFilter.toLowerCase() === subFiltersObject.filterSelected;
                                }
                            )
                            console.log('yo', subFiltersObject.filterSelected)
                            outPut.push(subFiltersObject.filterSelected);
                        }
                        console.log(outPut)
                        return outPut;
                    }
                } catch (e) {
                    console.log(e);
                }
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

                this.$forceUpdate();
                // clickedObject.updateKey++;
            },
            createIndexForFilters: function () {
                this.filters.forEach(item => {
                    this.filterSelected[item.filter] = [];
                });
            },
            clearSubFilters() {
                // alert('a')
            },
        }
        ,
        computed: {
            searchSubFilters() {
                let _module = this;
                // alert(_module.filters[1].searchTerm);
                if (_module.filters[1].searchTerm === null || _module.filters[1].searchTerm === '')
                    return this.filters;
                else {
                    let a = _module.filters[1].subFilters.filter(item => item.subFilter.includes(_module.filters[1].searchTerm));
                    console.log(a);
                    // object problem
                    _module.filters[1] = {
                        filter: 'LICENSES',
                        filterSelected: {},
                        searchTerm: _module.filters[1].searchTerm,
                        updateKey: 0,
                        subFilters: [{
                            subFilter: 'subfilter-1',
                            icon: 'mdi-account',
                            active: false,
                            inventory: 100
                        }]
                    };
                    console.log('updatedFilters 0', _module.filters[0].subFilters)
                    console.log('updatedFilters 1', _module.filters[1].subFilters)
                    console.log('updatedFilters 2', _module.filters[2].subFilters)
                    return _module.filters;
                }
                /*
                console.log(this.filters[1])
                return this.filters[1].subFilters.filter(item => {
                    item.subFilter.toLowerCase().includes(this.searchTerm.toLowerCase())
                })*/

            },
        },
        created() {
            //open first expandable panel.
            // this.panel['0'] = 0;
            this.all();
            this.createIndexForFilters();
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