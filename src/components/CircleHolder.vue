<template>
    <div class="circle">
        <v-icon size="50" class="iconClass">mdi-database</v-icon>
        <span id="innerCircle" :style="statusStyles.ready.backColor">
        <v-tooltip right>
            <template v-slot:activator="{ on }">
                <b id="status-style" v-on="on">{{statusStyles.ready.title}}</b>
            </template>
            <span>Ready</span>
        </v-tooltip>
        </span>
    </div>
</template>

<script>
    export default {
        name: "CircleHolder",
        data() {
            return {
                statusStyles: {
                    ready: {
                        title: 'R',
                        backColor: 'background: linear-gradient(green, lightgreen)'
                    },
                    deprecated: {
                        title: 'D',
                        backColor: 'background: linear-gradient(#8F4309, #a57202)'
                    },
                    uncertain: {
                        title: 'U',
                        backColor: 'background: linear-gradient(yellow, yellow)'
                    },
                    inDevelopment: {
                        title: 'I',
                        backColor: 'background: linear-gradient(pink, pink)'
                    }
                },

                /*
                                statusStyles: {
                                    ready: 'background: linear-gradient(green, lightgreen)',
                                    deprecated: 'background: linear-gradient(#8F4309, #a57202)',
                                    uncertain: 'background: linear-gradient(green, lightgreen)',
                                    inDevelopment: 'background: linear-gradient(green, lightgreen)',
                                },
                */
            }
        }
    }
</script>

<style scoped lang="scss">
    .circle {
        position: relative;
        border: lightgray 1px solid;
        background-color: white;
        height: 100px;
        border-radius: 150px;
        -moz-border-radius: 150px;
        -webkit-border-radius: 150px;
        width: 100px;

        #innerCircle {
            position: absolute;
            right: -25%;
            top: 30%;
            height: 45px;
            border-radius: 45px;
            -moz-border-radius: 45px;
            -webkit-border-radius: 45px;
            width: 45px;
            opacity: .8;
            background: linear-gradient(gray, lightgray);

            #status-style {
                color: white;
                position: absolute;
                top: 20%;
                left: 35%;
                font-size: 20px;
                cursor: help;
            }
        }

        .iconClass {
            position: absolute;
            left: 25%;
            top: 25%;
        }
    }


</style>