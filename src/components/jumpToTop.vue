<template>
    <transition name="fade">
        <v-btn
                fab
                color="primary"
                bottom
                right
                fixed
                class="mr-2"
                @click="scrollToTop"
        >
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
    </transition>
</template>

<script>
    export default {
        name: "JumpTop",
        props: {
            targetObject: null
        },
        methods: {
            scrollToTop: function () {
                let myDiv = document.getElementById(this.targetObject);
                myDiv.scrollTo(top);
            },
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>