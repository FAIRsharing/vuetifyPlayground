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
                        <!-- General Information -->
                        <v-row no-gutters>
                            <v-col>
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>GENERAL
                                        INFO<span
                                                class="triangle-bottomRight"></span></h4>

                                    <!-- Ribbon -->
                                    <Ribbon title="RECOMMENDED" v-if="fairsharingRecord.isRecommended"></Ribbon>
                                    <!-- Title and DOI -->
                                    <v-row no-gutters class="mb-2">
                                        <v-col cols="4" sm="2" md="2" lg="1" xl="1"
                                               class="d-flex flex-row align-center mt-4 ">
                                            <circle-holder status="ready"/>
                                        </v-col>
                                        <v-col class="d-flex flex-column justify-center" cols="12" sm="10" md="10"
                                               lg="11" xl="11">
                                            <div class="d-flex flex-column mt-2  ml-sm-6 ml-lg-8">
                                                <div class="d-flex flex-row mb-2 align-center">
                                                    <h3>{{fairsharingRecord.name}}</h3>
                                                    <b class="ml-2">({{fairsharingRecord.abbreviation}})</b>
                                                </div>
                                                <div class="d-flex align-center">
                                                    <h3 class="mr-1">doi: </h3>
                                                    <router-link :to="fairsharingRecord.doi">
                                                        {{fairsharingRecord.doi}}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </v-col>
                                    </v-row>

                                    <section>
                                        <!--Type-->
                                        <div class="d-flex">
                                            <b class="mr-2">Type:</b>
                                            <p>{{fairsharingRecord.type | capitalize | cleanString}}</p>
                                        </div>
                                        <!--Year of Creation-->
                                        <!--!! Attention need data model to be changed. must be sent by fairsharing Object like below!! -->
                                        <!--fairsharingRecord.year_creation-->
                                        <div class="d-flex">
                                            <b class="mr-2">Year of Creation:</b>
                                            <p>{{fairsharingRecord.metadata.year_creation}}</p>
                                        </div>
                                        <!--Registry-->
                                        <div class="d-flex">
                                            <b class="mr-2">Registry:</b>
                                            <p>{{fairsharingRecord.registry | capitalize}}</p>
                                        </div>
                                        <!--Description-->
                                        <div class="d-flex align-center">
                                            <b class="mr-2">Description:</b>
                                            <p>{{fairsharingRecord.description | capitalize}}</p>
                                        </div>
                                        <!--HomePage-->
                                        <div class="d-flex">
                                            <b class="mr-2 mb-4">Home Page:</b>
                                            <router-link :to="fairsharingRecord.homepage">
                                                {{fairsharingRecord.homepage}}
                                            </router-link>
                                        </div>
                                        <!--Developed Countries -->
                                        <div class="d-flex flex-wrap">
                                            <b class="mr-2">Countries developed this resource:</b>
                                            <v-tooltip top v-for="n in 20" :key="n"
                                            >
                                                <template v-slot:activator="{ on }">
                                                    <button v-on="on" class="mb-2 flag-mr">
                                                        <country-flag
                                                                :country="n%2===0?'de':'it'" size='big'
                                                        />
                                                    </button>
                                                </template>
                                                <span class="white--text">{{n%2===0?'Germany':'Italy'}}</span>
                                            </v-tooltip>
                                        </div>
                                    </section>
                                </v-card>
                            </v-col>
                        </v-row>

                        <!-- Single Row -->
                        <v-row>
                            <!--Left Column-->
                            <v-col :cols="$vuetify.breakpoint.mdAndDown?'12':'6'">
                                <!-- KEYWORDS -->
                                <v-card
                                        class="pa-4 mt-3 mt-lg-2 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>KEYWORDS<span
                                            class="triangle-bottomRight"></span></h4>
                                    <section>
                                        <!--Taxonomies-->
                                        <div class="d-flex mt-4 flex-wrap">
                                            <b class="mr-2">Taxonomies:</b>
                                            <v-chip
                                                    v-for="item in fairsharingRecord.taxonomies"
                                                    :key="item.label"
                                                    class="mr-2 mb-2 "
                                                    color="primary"
                                                    label
                                                    outlined
                                                    text-color="primary"
                                            >
                                                <v-icon left>mdi-label</v-icon>
                                                {{item.label}}
                                            </v-chip>
                                        </div>
                                        <!--Domains-->
                                        <div class="d-flex mt-2 flex-wrap">
                                            <b class="mr-8">Domains:</b>
                                            <v-chip
                                                    v-for="item in fairsharingRecord.domains"
                                                    :key="item.label"
                                                    class="mr-2 mb-2"
                                                    color="secondary"
                                                    label
                                                    outlined
                                                    text-color="secondary"
                                            >
                                                <v-icon left>mdi-label</v-icon>
                                                {{item.label}}
                                            </v-chip>
                                        </div>
                                        <!--Subjects-->
                                        <div class="d-flex mt-2 flex-wrap">
                                            <b class="mr-8">Subjects:</b>
                                            <v-chip
                                                    v-for="item in fairsharingRecord.subjects"
                                                    :key="item.label"
                                                    class="mr-2 mb-2"
                                                    color="accent"
                                                    label
                                                    outlined
                                                    text-color="accent"
                                            >
                                                <v-icon left>mdi-label</v-icon>
                                                {{item.label}}
                                            </v-chip>
                                        </div>
                                    </section>
                                </v-card>
                                <!-- SUPPORT -->
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>SUPPORT<span
                                            class="triangle-bottomRight"></span></h4>
                                    <!--Contact-->
                                    <v-card
                                            class="pa-4 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(contact,index) in fairsharingRecord.metadata.contacts"
                                            :key="contact.contact_name"
                                    >
                                        <div class="d-flex mt-2 flex-wrap">
                                            <v-icon color="secondary" class="mr-2">mdi-account</v-icon>
                                            <b class="mr-2">Contact Name:</b>
                                            <p class="ma-0">{{contact.contact_name}}</p>
                                        </div>
                                        <div class="d-flex mt-2 flex-wrap">
                                            <v-icon color="secondary" class="mr-2">mdi-email</v-icon>
                                            <b class="mr-2">Contact Email:</b>
                                            <p class="ma-0">{{contact.contact_email}}</p>
                                        </div>
                                    </v-card>
                                </v-card>
                                <!-- GRANTS -->
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>GRANTS<span
                                            class="triangle-bottomRight"></span></h4>
                                    <v-card
                                            class="pr-2 pl-4 pt-1 pb-2 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(grant,index) in fairsharingRecord.grants"
                                            :key="grant.name"
                                    >
                                        <div class="d-flex mt-2 ">
                                            <v-icon color="secondary" class="mr-2">mdi-cash-multiple</v-icon>
                                            <p class="ma-0">{{grant.name}}</p>
                                        </div>
                                    </v-card>
                                </v-card>
                                <!-- ORGANISATION -->
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span
                                            class="triangle-bottomLeft"></span>ORGANISATION<span
                                            class="triangle-bottomRight"></span></h4>
                                    <v-card
                                            class="pr-2 pl-4 pt-1 pb-2 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(organisation,index) in fairsharingRecord.organisations"
                                            :key="organisation.name"
                                    >
                                        <div class="d-flex mt-2 ">
                                            <v-icon color="secondary" class="mr-2">mdi-factory</v-icon>
                                            <p class="ma-0">{{organisation.name}}</p>
                                        </div>
                                    </v-card>
                                </v-card>
                            </v-col>
                            <!--Right Column-->
                            <v-col :cols="$vuetify.breakpoint.mdAndDown?'12':'6'">
                                <!-- LICENSES -->
                                <v-card
                                        class="pa-4 mt-0 mt-lg-2 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>LICENSES<span
                                            class="triangle-bottomRight"></span></h4>
                                    <v-card
                                            class="pr-2 pl-4 pt-1 pb-2 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(licence,index) in fairsharingRecord.licences"
                                            :key="licence.name"
                                    >
                                        <div class="d-flex mt-2 ">
                                            <v-icon color="secondary" class="mr-2">mdi-certificate</v-icon>
                                            <p class="ma-0">{{licence.name}}</p>
                                        </div>
                                    </v-card>
                                </v-card>
                                <!-- MAINTAINERS -->
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>MAINTAINERS<span
                                            class="triangle-bottomRight"></span></h4>
                                    <!--Contact-->
                                    <v-card
                                            class="pa-4 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(maintainer,index) in fairsharingRecord.maintainers"
                                            :key="maintainer.contact_name"
                                    >
                                        <div class="d-flex mt-2 flex-wrap">
                                            <v-icon color="secondary" class="mr-2">mdi-account-circle</v-icon>
                                            <b class="mr-2">User Name:</b>
                                            <router-link :to="maintainer.username+'/'+maintainer.id">
                                                {{maintainer.username+'/'+maintainer.id}}
                                            </router-link>
                                        </div>
                                    </v-card>
                                </v-card>
                                <!-- PUBLICATIONS -->
                                <v-card
                                        class="pa-4 mt-5 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>PUBLICATIONS<span
                                            class="triangle-bottomRight"></span></h4>
                                    <v-card
                                            class="pr-2 pl-4 pt-1 pb-2 d-flex flex-column"
                                            :class="index===0?'mt-4':'mt-2'"
                                            flat
                                            outlined
                                            v-for="(publication,index) in fairsharingRecord.publications"
                                            :key="publication.title"
                                    >
                                        <div class="d-flex mt-2 ">
                                            <v-icon color="secondary" class="mr-2">mdi-book-open</v-icon>
                                            <p class="ma-0">{{publication.title}}</p>
                                        </div>
                                    </v-card>
                                </v-card>
                            </v-col>
                        </v-row>

                        <!-- Associated Records -->
                        <v-row no-gutters>
                            <v-col>
                                <v-card
                                        class="pa-4 mt-2 d-flex flex-column"
                                        outlined
                                        tile
                                        elevation="1"
                                >
                                    <h4 class="title-style"><span class="triangle-bottomLeft"></span>ASSOCIATED
                                        RECORDS<span
                                                class="triangle-bottomRight"></span></h4>
                                    <section class="mt-2">

                                        <v-card class="mt-3">
                                            <v-card-title>
                                                Data Table
                                                <v-spacer></v-spacer>
                                                <v-text-field
                                                        v-model="search"
                                                        append-icon="mdi-magnify"
                                                        label="Search"
                                                        single-line
                                                        hide-details
                                                ></v-text-field>
                                            </v-card-title>
                                            <v-data-table
                                                    :headers="headers"
                                                    :items="flattenAssociatedRecordsArray"
                                                    :search="search"
                                            ></v-data-table>
                                        </v-card>

                                    </section>
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
    import Ribbon from "../components/Ribbon";
    import CircleHolder from "../components/CircleHolder";
    import Footer from "../components/Footer";
    import CountryFlag from 'vue-country-flag';

    export default {
        name: "Record",
        components: {Footer, CircleHolder, Ribbon, CountryFlag},
        filters: {
            capitalize: function (value) {
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            cleanString: function (string) {
                if (typeof string === "string") {
                    return string.replace(/_/g, " ");
                }
                return string;
            },
        },
        methods: {
            cleanString: function (string) {
                if (typeof string === "string") {
                    return string.replace(/_/g, " ");
                }
                return string;
            }
        },
        computed: {
            // flatten the associatedRecords and AssociatedRecordsReverse into one array
            flattenAssociatedRecordsArray: function () {
                let flatten_recordAssociations = [];
                this.fairsharingRecord.recordAssociations.forEach(item => {
                    let object = {registry: null, name: null, recordAssocLabel: null, subject: null}
                    object.id = item.linkedRecord.id;
                    object.registry = item.linkedRecord.registry;
                    object.name = item.linkedRecord.name;
                    object.recordAssocLabel = this.cleanString(item.recordAssocLabel + ' ->');
                    object.subject = this.fairsharingRecord.name;
                    flatten_recordAssociations.push(object);
                });
                this.fairsharingRecord.reverseRecordAssociations.forEach(item => {
                    let object = {registry: null, name: null, recordAssocLabel: null, subject: null}
                    object.id = item.fairsharingRecord.id;
                    object.registry = item.fairsharingRecord.registry;
                    object.name = item.fairsharingRecord.name;
                    object.recordAssocLabel = this.cleanString(item.recordAssocLabel + ' ->');
                    object.subject = this.fairsharingRecord.name;
                    flatten_recordAssociations.push(object);
                });
                return flatten_recordAssociations;
            }
        },
        data: () => {
            return {
                search: '',
                headers: [
                    {text: 'Name', value: 'name'},
                    {text: 'Registry', value: 'registry'},
                    {text: 'Relationship', value: 'recordAssocLabel'},
                    {text: 'Subject', value: 'subject'},
                ],
                showScrollToTopButton: false,
                fairsharingRecord: {
                    "registry": "standard",
                    "type": "terminology_artefact",
                    "doi": "10.25504/FAIRsharing.1414v8",
                    "status": "ready",
                    "name": "BRENDA tissue / enzyme source",
                    "abbreviation": "BTO",
                    "description": "A structured controlled vocabulary for the source of an enzyme.A structured controlled vocabulary for the source of an enzyme.A structured controlled vocabulary for the source of an enzyme.A structured controlled vocabulary for the source of an enzyme.A structured controlled vocabulary for the source of an enzyme. It comprises terms for tissues, cell lines, cell types and cell cultures from uni- and multicellular organisms.",
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
                    "grants": [{"name": "R01 GM071872"}, {"name": "AA b21221"}, {"name": "GF GAA1872"}],
                    "isRecommended": true,
                    "legacyIds": ["bsg-000063", "bsg-s000063"],
                    "licences": [{"name": "ORCID MIT-Style License"}, {"name": "The MIT License (MIT)"}],
                    "maintainers": [{"username": "ORCID", "id": 2267}],
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
        }
    }
</script>

<style scoped lang="scss">
    a {
        text-decoration: none;

        &:hover, &:focus {
            text-decoration: underline;
            outline: 0;
        }
    }

    .flag-mr {
        margin-right: .29em;
    }

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

    .title-style {
        position: absolute;
        top: -8px;
        /*
                        color: #909090;
                        background: linear-gradient(#bebebe,transparent);
                        border: #bebebe solid 1px;
        */
        color: white;
        background: linear-gradient(#4f5f5d, #00aa8e);
        background: -moz-linear-gradient(#4f5f5d, #00aa8e);
        background: -webkit-linear-gradient(#4f5f5d, #00aa8e);
        background: -o-linear-gradient(#4f5f5d, #00aa8e);
        padding: 1px 10px 1px 10px;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;

        .triangle-bottomLeft {
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            left: -8px;
            border-bottom: 8px solid #aaaaaa;
            border-left: 8px solid transparent;
        }

        .triangle-bottomRight {
            width: 0;
            height: 0;
            position: absolute;
            top: 0;
            right: -8px;
            border-bottom: 8px solid #aaaaaa;
            border-right: 8px solid transparent;
        }

    }
</style>