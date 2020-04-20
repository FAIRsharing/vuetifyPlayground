<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="toggleDrawerLeft" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
        <v-img src="@/assets/fairsharing-logo.svg" height="60" class="d-flex flex-grow-0" contain></v-img>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-2">
            Standards
        </v-btn>
        <v-btn color="primary" class="mr-2">
            Policies
        </v-btn>
        <v-btn color="primary" class="mr-2">
            Collections
        </v-btn>
        <v-btn color="primary" class="mr-2">
            MenuTitle
        </v-btn>

    </v-app-bar>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                drawerLeft: false
            }
        },
        methods: {
            toggleDrawerLeft: function () {
                this.drawerLeft = true;
                this.$emit('setParentDrawerStatus', this.drawerLeft)
            }
        }
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