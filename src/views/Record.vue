<template>
    <v-content>
        <h1 class="d-none">
            Content
        </h1>
        <v-container fluid>
            <!--  Content  -->
            <v-row no-gutters
            >
                <v-col cols="12" lg="12" md="12" xl="12">
                    <v-card
                            class="pa-4"
                            outlined
                            tile
                            elevation="1"
                    >
                        <!-- Ribbon -->
                        <Ribbon title="RECOMMENDED" v-if="true"></Ribbon>
                        <!-- Title and DOI -->
                        <v-row no-gutters>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="8" xl="8"
                                   class="d-flex flex-row align-center">
                                <circle-holder status="ready" class="mr-8"/>
                                <h3>BRENDA tissue / enzyme source</h3>
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4"
                                   class="d-flex flex-row align-center">
                                <h3>doi: <u>{{fairsharingRecord.doi}}</u></h3>
                            </v-col>
                        </v-row>

                        <!-- General Information -->
                        <v-row no-gutters>
                            <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                        style="width: 100%"
                                >
                                    <h4>GENERAL INFORMATION</h4>
                                    <p>its some description about generation</p>
                                    <i>some more info about general</i>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row no-gutters>
                            <!-- SUPPORT -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pr-md-2 pr-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>SUPPORT</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- META INFO -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pl-md-2 pl-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>META INFORMATION</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- GRANTS -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pr-md-2 pr-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>GRANTS</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- ORGANIZATION -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pl-md-2 pl-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>ORGANIZATION</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- LICENSES -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pr-md-2 pr-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>LICENCES</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- MAINTAINERS -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pl-md-2 pl-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>MAINTAINERS</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- ASSOCIATED RECORDS -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pr-md-2 pr-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>ASSOCIATED RECORDS</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                            <!-- PUBLICATIONS -->
                            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6" class="pl-md-2 pl-sm-0">
                                <v-card
                                        class="pa-4 mt-4 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4>PUBLICATIONS</h4>
                                    <p>its some description</p>
                                    <i>some more info</i>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <!--  Footer  -->
            <Footer></Footer>
        </v-container>
    </v-content>
</template>

<script>
    import JumpTop from "../components/jumpToTop";
    import Ribbon from "../components/Ribbon";
    import CircleHolder from "../components/CircleHolder";
    import Footer from "../components/Footer";

    export default {
        name: "Record",
        components: {Footer, CircleHolder, Ribbon, JumpTop},
        data: () => {
            return {
                showScrollToTopButton: false,
                fairsharingRecord: {
                    "registry": "standard",
                    "type": "terminology_artefact",
                    "doi": "10.25504/FAIRsharing.1414v8",
                    "status": "ready",
                    "name": "BRENDA tissue / enzyme source",
                    "abbreviation": "BTO",
                    "description": "A structured controlled vocabulary for the source of an enzyme. It comprises terms for tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.",
                    "homepage": "http://www.brenda-enzymes.info",
                    "countries": [{"name": "Germany"}],
                    "metadata": {
                        "doi": "10.25504/FAIRsharing.1414v8",
                        "name": "BRENDA tissue / enzyme source",
                        "status": "ready",
                        "contacts": [{
                            "contact_name": "BrendaTissue Administrators",
                            "contact_email": "a.chang@tu-bs.de"
                        }],
                        "homepage": "http://www.brenda-enzymes.info",
                        "identifier": 2,
                        "description": "A structured controlled vocabulary for the source of an enzyme. It comprises terms for tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.",
                        "abbreviation": "BTO",
                        "year_creation": 1991
                    },
                    "taxonomies": [{"label": "All"}],
                    "domains": [{"label": "Reaction data"}, {"label": "Cell"}, {"label": "Enzyme"}, {"label": "Organ"}],
                    "subjects": [{"label": "Life Science"}, {"label": "Ontology and Terminology"}, {"label": "Enzymology"}],
                    "grants": [{"name": "R01 GM071872"}],
                    "isRecommended": false,
                    "legacyIds": ["bsg-000063", "bsg-s000063"],
                    "licences": [{"name": "License agreement for users of BRENDA"}],
                    "maintainers": [],
                    "organisations": [{"name": "The Federal Ministry of Education and Research (BMBF)"}, {"name": "European Union, Free European Life-Science Information and Computational Services (FELICS)"}, {"name": "European Union, Serving Life-science Information for the Next Generation (SLING)"}, {"name": "BRENDA Administrators"}, {"name": "Ministry of Science and Culture of Lower Saxony, Hannover, Germany"}, {"name": "National Institutes of Health (NIH), Bethesda, MD, USA"}],
                    "publications": [{"title": "The BRENDA Tissue Ontology (BTO): the first all-integrating ontology of all organisms for enzyme sources."}, {"title": "BRENDA in 2019: a European ELIXIR core data resource."}, {"title": "BRENDA, the enzyme database: updates and major new developments."}, {"title": "BRENDA in 2015: exciting developments in its 25th year of existence."}, {"title": "BRENDA in 2013: integrated reactions, kinetic data, enzyme function data, improved disease classification: new options and contents in BRENDA."}],
                    "recordAssociations": [{
                        "linkedRecord": {
                            "name": "FAANG metadata experiment specification standard",
                            "id": 222,
                            "registry": "standard"
                        }, "recordAssocLabel": "related_to"
                    }, {
                        "linkedRecord": {
                            "name": "Fission Yeast Phenotype Ontology",
                            "id": 340,
                            "registry": "standard"
                        }, "recordAssocLabel": "related_to"
                    }, {
                        "linkedRecord": {
                            "name": "Investigation Study Assay Tabular",
                            "id": 1140,
                            "registry": "standard"
                        }, "recordAssocLabel": "related_to"
                    }, {
                        "linkedRecord": {
                            "name": "Ontology for Parasite LifeCycle",
                            "id": 186,
                            "registry": "standard"
                        }, "recordAssocLabel": "related_to"
                    }, {
                        "linkedRecord": {
                            "name": "FAANG metadata sample specification standard",
                            "id": 648,
                            "registry": "standard"
                        }, "recordAssocLabel": "related_to"
                    }, {
                        "linkedRecord": {"name": "PRIDE XML Format", "id": 480, "registry": "standard"},
                        "recordAssocLabel": "related_to"
                    }],
                    "reverseRecordAssociations": [{
                        "fairsharingRecord": {
                            "name": "ChEMBL",
                            "id": 1420,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "neXtProt", "id": 1540, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "Stem Cell Discovery Engine",
                            "id": 1547,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "MetaboLights", "id": 1570, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "BRENDA", "id": 1648, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "SABIO-RK Biochemical Reaction Kinetics Database",
                            "id": 1750,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "The Global Proteome Machine Database",
                            "id": 1809,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "Biological General Repository for Interaction Datasets",
                            "id": 1888,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "ReMap", "id": 2080, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "SIGnaling Network Open Resource",
                            "id": 2084,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "Immune Epitope Database",
                            "id": 2206,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {
                            "name": "Target Central Resource Database",
                            "id": 2224,
                            "registry": "database"
                        }, "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "OBO Foundry", "id": 2460, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "Bovine Genome Database", "id": 2493, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "BovineMine", "id": 2576, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "Chickspress", "id": 2726, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "miRwayDB", "id": 2729, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "TISSUES", "id": 2730, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }, {
                        "fairsharingRecord": {"name": "LEAFDATA", "id": 2731, "registry": "database"},
                        "recordAssocLabel": "implements"
                    }],
                    "reviews": []
                }
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