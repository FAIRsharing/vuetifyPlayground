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
            <v-row no-gutters
            >
                <v-col cols="12" lg="12" md="12" xl="12" class="mt-2 ml-2">
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
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import JumpTop from "../components/jumpToTop";

    export default {
        name: "Record",
        components: {JumpTop},
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