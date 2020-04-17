<template>


    <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-img src="@/assets/fairsharing-logo.svg" height="60" class="d-flex flex-grow-0" contain></v-img>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu
                left
                bottom
        >
        </v-menu>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>