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
            <FilterButtons :md-screens="$vuetify.breakpoint.mdAndDown"/>
        </v-card>
    </aside>
</template>

<script>
    import FilterButtons from "./FilterButtons";
    export default {
        name: "LeftPanel",
        components: {FilterButtons},
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