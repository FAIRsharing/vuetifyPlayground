<template>
    <v-app-bar height="100">
        <v-app-bar-nav-icon @click="toggleDrawerLeft" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
        <v-img src="@/assets/fairsharing-logo.svg" height="80" class="d-flex flex-grow-0" contain></v-img>
        <v-spacer></v-spacer>
        <nav>
            <ul v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" id="nav-md-lg-screens">
                <li>
                    <v-btn
                            :small="$vuetify.breakpoint.mdAndDown"
                            :x-large="$vuetify.breakpoint.xlOnly"
                            v-for="(item, itemIndex) in links"
                            :key="'navBarTopMenuItem_' + itemIndex"
                            class="mr-1 mt-sm-1"
                            :class="item.color"
                            :to="item.link"
                    >
                        <span class="white--text">{{ item.label }}</span>
                    </v-btn>
                </li>
            </ul>
        </nav>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                drawerLeft: false,
                links: [
                    {
                        label: "Search",
                        link: "/search",
                        color: "blue"
                    },
                    {
                        label: "Standards",
                        link: "/standards",
                        color: "blue"
                    },
                    {
                        label: "Databases",
                        link: "/databases",
                        color: "blue"
                    },
                    {
                        label: "Policies",
                        link: "/policies",
                        color: "blue"
                    },
                    {
                        label: "Collections",
                        link: "/collections",
                        color: "blue"
                    },
                    {
                        label: "Add/Claim content",
                        link: "/new",
                        color: "grey"
                    },
                    {
                        label: "Stats",
                        link: "/summary-statistics",
                        color: "teal darken-2"
                    }
                ]
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
    ul {
        list-style: none;
    }
    header{
        padding-right: .5rem;
    }
</style>