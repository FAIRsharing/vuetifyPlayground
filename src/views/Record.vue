<template>
    <v-content>
        <h1 class="d-none">
            Content
        </h1>
        <transition name="fade">
            <jump-top v-if="showScrollToTopButton"/>
        </transition>
        <v-container fluid
        >
            <!--  Content  -->
            <v-row no-gutters class=" "
            >
                <v-col cols="12" lg="12" md="12" xl="12">
                    <v-card
                            class="pa-2"
                            outlined
                            tile
                            elevation="1"
                    >
                        <Ribbon title="RECOMMENDED" v-if="true"></Ribbon>
                        <div class="d-flex flex-row align-center">
                            <circle-holder status="ready" class="mr-8"/>
                            <h2>Record title example</h2>
                        </div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>
                        <div>general info</div>

                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import JumpTop from "../components/jumpToTop";
    import Ribbon from "../components/Ribbon";
    import CircleHolder from "../components/CircleHolder";

    export default {
        name: "Record",
        components: {CircleHolder, Ribbon, JumpTop},
        data: () => {
            return {
                showScrollToTopButton: false
            }
        },
        methods: {},
    }
</script>

<style scoped>
    #banner {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1em;
    }

    .content-custom {
        max-height: 100vh;
        scroll-behavior: smooth;
        padding: 0;
    }
</style>