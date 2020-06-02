<template>
    <v-app id="app">
        <v-navigation-drawer app bottom v-model="showDrawerLeft" v-if="$vuetify.breakpoint.smAndDown">
        </v-navigation-drawer>
        <transition name="fade">
            <Header v-if="showHeader" v-on:setParentDrawerStatus="setDrawerStatus"></Header>
        </transition>
        <router-view v-on:toggleHeader="toggleHeaderHidden"/>
    </v-app>
</template>

<script>
    import Header from "./components/Header";

    export default {
        components: {Header},
        props: {
            source: String,
        },
        data: () => ({
            showHeader: true,
            showDrawerLeft: false,
            hideOverflow: 'overflow-hidden'

        }),
        created() {
            // this.$vuetify.theme.dark = true;
            // console.log( this.$vuetify.theme);
            //  console.log( this.$vuetify.icons.values);
            //  console.log( this.$vuetify);
            // console.log( this.$vuetify.breakpoint);
            // console.log( this.$vuetify.breakpoint.width + ' '+this.$vuetify.breakpoint.height);
        },
        methods: {
            setDrawerStatus: function (drawerStatus) {
                this.showDrawerLeft = drawerStatus;
            },
            toggleHeaderHidden: function (headerState) {
                this.showHeader = headerState;
            },
            toggleOverFlow: function (status) {
                let root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
                status ? root.setAttribute('class', this.hideOverflow) : root.removeAttribute('class');
            }
        },
        computed: {
            bodyOverFlow: function () {
                return this.$store.state.utils.bodyOverflowState;
            },
        },
        watch: {
            bodyOverFlow: function () {
                this.toggleOverFlow(this.bodyOverFlow);
            }
        },
    }
</script>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 99vh;
    }

    html, body {
        height: 100%;
    }

    .footer-content {

    }

    .overflow-hidden {
        overflow: hidden !important;
    }


</style>