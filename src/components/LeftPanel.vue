<template>
    <aside>
        <v-card id="filters-holder"
                class="pa-2"
                outlined
                tile
                elevation="3"
        >
            <h2 class="d-none">
                Filter List
            </h2>
            <!-- Must change to this style in smaller screen -->
            <!--
                            <div class="d-flex flex-row justify-center mb-2"  >
                                    <v-btn color="primary" class="mr-1" style="font-size: 9px;width: 16.5%" >ALL</v-btn>
                                    <v-btn color="primary" class="mr-1" style="font-size: 9px;width: 38%" outlined>RECOMMENDED</v-btn>
                                    <v-btn color="primary" class="mr-1" style="font-size: 9px;width: 38%" outlined>NOT RECOMMENDED</v-btn>
                            </div>
            -->
            <div class="d-flex flex-row justify-start mb-2">
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 16.5%">ALL</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>RECOMMENDED</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>NOT RECOMMENDED</v-btn>
            </div>
            <div class="d-flex flex-row justify-start mb-2">
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 16.5%">ALL</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>PUBLISHED</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>NOT PUBLISHED</v-btn>
            </div>
            <div class="d-flex flex-row justify-start mb-2">
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 16.5%">ALL</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>MAINTAINED</v-btn>
                <v-btn color="primary" class="mr-2" style="font-size: 11px;width: 40%" outlined>NOT MAINTAINED</v-btn>
            </div>
            <v-expansion-panels
                    v-model="panel"
                    multiple

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
        </v-card>
    </aside>
</template>

<script>
    export default {
        name: "LeftPanel",
        data: () => ({
            panel: [],
            items: 5,
        }),
        created() {
            //open first expandable panel.
            this.panel['0'] = 0;
            // this.all();
        },
        methods: {
            // Create an array the length of our items
            // with all values as true
            all() {
                this.panel = [...Array(this.items).keys()].map((k, i) => i)
            },
            // Reset the panel
            none() {
                this.panel = []
            },
        },
    }
</script>

<style scoped lang="scss">

    aside {
        #filters-holder {
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            overflow-x: hidden;
            height: 100vh;
        }
    }

</style>