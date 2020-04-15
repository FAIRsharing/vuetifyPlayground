<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawerRight"
                app
                clipped
                right
        >
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-right
                color="primary"

        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="customColor"/>
            <v-toolbar-title color="primary">Toolbar</v-toolbar-title>
            <v-spacer/>
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" color="customColor"/>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                app
        >
            <v-list dense>
                <v-list-item @click.stop="left = !left">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Open Temporary Drawer</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer
                v-model="left"
                fixed
                temporary

        />

        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <span>there is some text content</span>

                <v-btn @click="callGlobalMixin">clickMixinFunction</v-btn>
                <accessibility></accessibility>
                <BreakPoint></BreakPoint>
                <v-row
                        justify="center"
                        align="center"
                >
                    <v-col class="shrink">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        :href="source"
                                        icon
                                        large
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                        icon
                                        large
                                        href="https://codepen.io/johnjleider/pen/QewYYx"
                                        target="_blank"
                                        v-on="on"
                                >
                                    <v-icon large>mdi-codepen</v-icon>
                                </v-btn>
                            </template>
                            <span>Codepen</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-navigation-drawer
                v-model="right"
                fixed
                right
                temporary
        />
        <v-footer
                app
                color="blue-grey"
                class="white--text"
        >
            <v-icon v-text="$vuetify.icons.values.switch" style="font-size: 3em"></v-icon>
            <v-icon v-text="$vuetify.icons.values.pc" large></v-icon>
            <v-icon v-text="$vuetify.icons.values.cancel" small></v-icon>
            <v-icon v-text="$vuetify.icons.values.playstation" class="mdi-rotate-45"></v-icon>
            <v-icon v-text="$vuetify.icons.values.xbox"></v-icon>
            <v-icon v-text="$vuetify.icons.values.xbox" class="mdi-spin" x-large></v-icon>
            <span>Vuetify is one of the best app in the world</span>
            <v-spacer/>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Accessibility from "./components/Accessibility";
    import BreakPoint from "./components/BreakPoint";

    export default {
        components: {BreakPoint, Accessibility},
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false,
            user: {
                name: 'John Leider',
                platform: 'pc'
            }
        }), created() {
            // this.$vuetify.theme.dark = true;
            // console.log( this.$vuetify.theme);
            //  console.log( this.$vuetify.icons.values);
            console.log(this.$vuetify);
            // console.log( this.$vuetify.breakpoint);
            // console.log( this.$vuetify.breakpoint.width + ' '+this.$vuetify.breakpoint.height);
        },
        methods: {
            callGlobalMixin: function () {
                console.log(this.globalReadOnlyProperty);
                console.log(this.applicationStrings);
                console.log(this.applicationStrings.connectionErrors.NOT_FOUND);
            }
        }
    }
</script>

<style lang="scss">
    #inspire {
        background-color: $color-h;
        /*font-family: Roboto, Helvetica, Arial, sans-serif;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*color: #2c3e50;*/
        min-height: 99vh;
    }
</style>