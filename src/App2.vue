<template>
    <v-app id="app">
        <v-content>
            <!--
            <span style="z-index: 200;position: fixed">{{ offsetTop }}</span>
            -->
            <v-container fluid
                         class="overflow-y-auto"
                         id="scroll-target"
                         style="max-height: 100vh"
            >
                <Header></Header>
                <v-row no-gutters
                >
                    <v-col cols="12" lg="4" md="4" class="d-none d-md-flex ">
                        <LeftPanel :class="stickToLeft?'left-panel-fixed':'left-panel-default'" />
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
<!--        <v-footer style="position: relative;height: 100px;background-color: red;width: 100vw">asdasd</v-footer>-->

    </v-app>
</template>

<script>
    import LeftPanel from "./components/LeftPanel";
    import RightContent from "./components/RightContent";
    import ListController from "./components/ListController";
    import Header from "./components/Header";

    export default {
        components: {Header, ListController, RightContent, LeftPanel},
        props: {
            source: String,
        },
        data: () => ({
            offsetTop: 0,
            stickToLeft: false
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
            onScroll(e) {
                let _module = this;
                this.offsetTop = e.target.scrollTop;
                this.offsetTop > 105 ? _module.stickToLeft = true : _module.stickToLeft = false;
            },
        }
    }
</script>

<style lang="scss">
    /*@import './styles/variables';*/

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
        /*height: 80vh;*/

    }

    html {
        height: 100%;
        overflow: hidden!important;
    }

</style>