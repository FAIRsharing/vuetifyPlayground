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
            <!-- Title banner -->
            <section
                    id="banner"
                    class="secondary"
            >
                <h1 class="text-center white--text">
                    {{ getTitle }}
                </h1>
                <p class="text-center white--text">
                    {{ recordsSubTitles[getTitle] }}
                </p>
            </section>

            <v-row no-gutters
            >
                <v-col cols="12" lg="4" md="4" class="d-none d-md-flex mt-2 ml-2">
                    <LeftPanel :class="stickToLeft?'left-panel-fixed':'left-panel-default'" />
                </v-col>
                <v-col class="mt-2">
                    <RightContentStackList
                            v-scroll:#scroll-target="onScroll"
                            class="pb-5 mr-2"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
    import LeftPanel from "@/components/LeftPanel";
    import JumpTop from "@/components/jumpToTop";
    import RightContentStackList from "../components/RightContentList";

    export default {
        name: "Records",
        components: {RightContentStackList, JumpTop, LeftPanel},
        data: () => ({
            offsetTop: 0,
            stickToLeft: false,
            bodyOverflowActive: true,
            hideOverflow: 'overflow-hidden',
            showScrollToTopButton: false,
            showHeader: true,
            showDrawerLeft: false,
            recordsSubTitles: {
                Standards: "The standards in FAIRsharing are manually curated from a variety of sources, including BioPortal, " +
                    "MIBBI and the Equator Network.",
                Collections: "Collections group together one or more types of resource (standard, database or policy) by " +
                    "domain, project or organisation. A Recommendation is a core-set of resources that are selected or " +
                    "endorsed by data policies from journals, funders or other organizations.",
                Databases: "A catalogue of databases, described according to the BioDBcore guidelines, along with the standards " +
                    "used within them; partly compiled with the support of Oxford University Press (NAR Database Issue " +
                    "and DATABASE Journal).",
                Policies: "FAIRsharing policies: A catalogue of data preservation, management and sharing policies from " +
                    "international funding agencies, regulators and journals.",
                Search: "Search the FAIRsharing records using advanced filtering"
            },

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
        },
        computed: {
            getTitle: function () {
                return 'Standards';
            }
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
        scroll-behavior: smooth;
        padding: 0;
    }

    #banner {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 1em;
    }

</style>