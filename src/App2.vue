<template>
    <v-app id="app">
        <v-navigation-drawer app left width="70%" v-model="showDrawerLeft" v-if="$vuetify.breakpoint.smAndDown">
        </v-navigation-drawer>
        <transition name="fade">
            <Header v-if="showHeader"></Header>
        </transition>
        <router-view/>
    </v-app>
</template>

<script>
    import Header from "./components/Header";

    export default {
        components: {Header},
        data: () => ({
            showHeader: true,
            showDrawerLeft: false,
            hideOverflow: 'overflow-hidden'
        }),
        computed: {
            watcherOnUIGeneralStatus: function () {
                return this.$store.state.uiController.UIGeneralStatus;
            },
        },
        watch: {
            watcherOnUIGeneralStatus: {
                handler(UIGeneralStatus) {
                    this.toggleOverFlow(UIGeneralStatus.bodyOverflowState);
                    this.toggleDrawer(UIGeneralStatus.drawerVisibilityState);
                    this.toggleHeader(UIGeneralStatus.headerVisibilityState);
                },
                deep: true
            },
            showDrawerLeft: function () {
                this.$store.dispatch("uiController/setGeneralUIAttributesAction", {
                    drawerVisibilityState: this.showDrawerLeft,
                });
            }
        },
        created() {
            // this.$vuetify.theme.dark = true;
            // console.log( this.$vuetify.theme);
            //  console.log( this.$vuetify.icons.values);
            //  console.log( this.$vuetify);
            // console.log( this.$vuetify.breakpoint);
            // console.log( this.$vuetify.breakpoint.width + ' '+this.$vuetify.breakpoint.height);
        },
        methods: {
            toggleOverFlow: function (status) {
                let root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
                status ? root.setAttribute('class', this.hideOverflow) : root.removeAttribute('class');
            },
            toggleDrawer: function (status) {
                this.showDrawerLeft = status;
            },
            toggleHeader: function (status) {
                this.showHeader = status;
            },
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