<template>
    <aside>
        <v-sheet color="orange lighten-2 ">
            <h2 class="indigo--text text--lighten-2 ">
                Filter List
            </h2>
            <div v-for="n in 200" style="background-color: gray" :key="n">filterItem {{n}}</div>
            <div>Last</div>
        </v-sheet>
    </aside>
</template>

<script>
    export default {
        name: "LeftPanel"
    }
</script>

<style scoped lang="scss">
    aside {
    }

    .v-sheet {
        border-radius: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        overflow-x: hidden;
        height: 100vh;
    }
</style>