<template>
    <v-expansion-panel
    >

        <v-expansion-panel-header>{{ object.filter}}</v-expansion-panel-header>
        <v-expansion-panel-content class="pl-5 pr-5">

            <v-list flat :class="{'fixed-scrollable-height':object.subFilters.length>5}">
                <v-list-item-group color="primary" multiple>
                    <v-list-item
                            v-for="(subObject,index) in object.subFilters"
                            :key="subObject.subFilter+'_'+index"
                            @click="$emit('AddParam',subObject.subFilter, subObject,object.filter)"
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
            <v-text-field
                    class="mt-2"
                    solo
                    dense
                    clearable
                    v-model="object.searchTerm"
                    :placeholder="`Search through ${object.filter}`"
            ></v-text-field>
            {{object.searchTerm}}
        </v-expansion-panel-content>
    </v-expansion-panel>

</template>

<script>
    export default {
        name: "ExpansionPanel",
        props: {object: null},

    }
</script>

<style scoped lang="scss">

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