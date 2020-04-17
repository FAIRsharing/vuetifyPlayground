<template>
    <v-app id="app">
<!--
        <v-navigation-drawer app>
        </v-navigation-drawer>
-->
        <Header v-if="showHeader"></Header>

            <v-content>
                <transition name="fade">
                    <jump-top target-object="scroll-target" v-if="showScrollToTopButton"/>
                </transition>
                <v-container fluid
                             class="overflow-y-auto  content-custom"
                             id="scroll-target"
                >
                    <v-row no-gutters
                    >
                        <v-col cols="12" lg="4" md="4" class="d-none d-md-flex ">
                            <LeftPanel :class="stickToLeft?'left-panel-fixed':'left-panel-default'"/>
                        </v-col>
                        <v-col>
                            <ListController></ListController>
                            <RightContent
                                    v-scroll:#scroll-target="onScroll"
                                    align="center"
                                    justify="center"
                                    class="pb-5"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
            <v-footer>
                <v-row>
                    <v-col class="d-flex justify-center">
                        <img src="src/assets/logo.png" height="200px"/>
                    </v-col>
                    <v-col class="d-flex justify-center">2</v-col>
                    <v-col class="d-flex justify-center">3</v-col>
                    <v-col class="d-flex justify-center">4</v-col>
                </v-row>
            </v-footer>
    </v-app>
</template>

<script>
    import LeftPanel from "./components/LeftPanel";
    import ListController from "./components/ListController";
    import Header from "./components/Header";
    import JumpTop from "./components/jumpToTop";
    import RightContent from "./components/RightContent";

    export default {
        components: {RightContent, JumpTop, Header, ListController, LeftPanel},
        props: {
            source: String,
        },
        data: () => ({
            offsetTop: 0,
            stickToLeft: false,
            bodyOverflowActive: true,
            hideOverflow: 'overflow-hidden',
            showScrollToTopButton: false,
            showHeader:true
        }),
        created() {
            this.ChangeOverflowStatus(true);
            // this.$vuetify.theme.dark = true;
            // console.log( this.$vuetify.theme);
            //  console.log( this.$vuetify.icons.values);
            //  console.log( this.$vuetify);
            // console.log( this.$vuetify.breakpoint);
            // console.log( this.$vuetify.breakpoint.width + ' '+this.$vuetify.breakpoint.height);
        },
        methods: {
            onScroll: function (e) {
                let _module = this;
                this.offsetTop = e.target.scrollTop;
                if(this.offsetTop > 105) {_module.stickToLeft = true;_module.showHeader=false;} else {_module.stickToLeft = false;_module.showHeader=true;}
                this.offsetTop > 500 ? _module.showScrollToTopButton = true : _module.showScrollToTopButton = false;
            },
            ChangeOverflowStatus: function (status) {
                let root = document.getElementsByTagName('html')[0]; // '0' to assign the first (and only `HTML` tag)
                status ? root.setAttribute('class', this.hideOverflow) : root.removeAttribute('class');
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

    .left-panel-fixed {
        position: fixed;
        top: 0;
        width: 32vw;
    }

    .left-panel-default {
        position: relative;
        width: 32vw;
        height: 100%;
    }

    html, body {
        height: 100%;
    }

    .overflow-hidden {
        overflow: hidden !important;
    }

    .content-custom {
        padding: 0 !important;
        max-height: 100vh;
        scroll-behavior: smooth
    }

    .footer-content {

    }


</style>