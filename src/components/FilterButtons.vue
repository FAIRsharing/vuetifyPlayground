<template>
    <div>
        <!-- 3 row buttons     -->
        <div class="d-flex flex-row justify-start mb-1 mb-lg-2" v-for="filterHolderIndex in 3" :key="filterHolderIndex">
            <v-btn @click="selectFilter(index,buttonsGroup[filterHolderIndex-1])" color="primary"
                   class="mr-1 mr-lg-2"
                   :class="[index===0?'first-child':'flex-1',{'button-style-md-screens':mdScreens}]" :outlined="!item.active"
                   v-for="(item,index) in buttonsGroup[filterHolderIndex-1]"
                   :key="index">{{item.title}}
            </v-btn>
        </div>
        <!-- 1 row buttons for records status    -->
        <div class="d-flex flex-row justify-start mb-1 mb-lg-2">
            <v-btn color="primary"
                   @click="selectFilter(index,buttonsRecordsState)"
                   class="mr-1 mr-lg-2 "
                   :class="[index===0?'first-child':'flex-1',{'buttons-md-style':mdScreens && index!==0}]"
                   :outlined="!item.active"
                   v-for="(item,index) in buttonsRecordsState"
                   :key="index">{{item.title}}
            </v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FilterButtons",
        props: {mdScreens: null},
        data() {
            return {
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
                buttonsRecordsState: [{title: 'ALL', active: true}, {title: 'U', active: false}, {
                    title: 'D',
                    active: false
                }, {
                    title: 'P',
                    active: false
                }, {
                    title: 'R',
                    active: false
                }]
            }
        },
        methods: {
            selectFilter: function (index, selectedButtonsArray) {
                selectedButtonsArray.map(item => item.active = false);
                selectedButtonsArray[index].active = true;
            }
        }
    }
</script>

<style scoped lang="scss">


    .button-style-md-screens {
        font-size: 9px!important;
    }

    .first-child {
        font-size: 11px;
        width: 16.5%;
    }

    .flex-1 {
        font-size: 11px;
        flex: 1;
    }
    .buttons-md-style
    {
        min-width: 32px!important;
    }
</style>