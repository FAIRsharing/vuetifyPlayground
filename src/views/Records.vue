<template>
    <v-content>
        <h1 class="d-none">
            Content
        </h1>
        <transition name="fade">
            <jump-top target-object="scroll-target" v-if="showScrollToTopButton"/>
        </transition>
        <v-container fluid
                     class="overflow-y-auto overflow-x-hidden content-custom "
                     id="scroll-target"
        >
            <v-row no-gutters
            >
                <v-col cols="12" lg="4" md="4" class="d-none d-md-flex ">
                    <LeftPanel :class="stickToLeft?'left-panel-fixed':'left-panel-default'"/>
                </v-col>
                <v-col>
                    <RightContentStackList
                            v-scroll:#scroll-target="onScroll"
                            class="pb-5 mr-1 ml-1 "
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import LeftPanel from "@/components/LeftPanel";
    import JumpTop from "@/components/jumpToTop";
    import RightContentStackList from "../components/RightContentStackList";

    export default {
        name: "Records",
        components: { RightContentStackList, JumpTop, LeftPanel},
        data: () => ({
            offsetTop: 0,
            stickToLeft: false,
            bodyOverflowActive: true,
            hideOverflow: 'overflow-hidden',
            showScrollToTopButton: false,
            showHeader: true,
            showDrawerLeft: false
        }),
        created() {
            this.$emit('changeOverFlow', true);
        },
        methods: {
            onScroll: function (e) {
                let _module = this;
                this.offsetTop = e.target.scrollTop;
                if (this.offsetTop > 105) {
                    _module.stickToLeft = true;
                    _module.showHeader = false;
                } else {
                    _module.stickToLeft = false;
                    _module.showHeader = true;
                }
                this.offsetTop > 500 ? _module.showScrollToTopButton = true : _module.showScrollToTopButton = false;
                this.$emit('toggleHeader', _module.showHeader);
            },
        }
    }
</script>

<style scoped lang="scss">
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

    .content-custom {
        max-height: 100vh;
        scroll-behavior: smooth
    }

</style>