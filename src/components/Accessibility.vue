<!-- Vue HTML Markup -->

<template>
    <div id="app">
        <span class="custom-class  secondary teal--text ">CustomClass</span>
        <v-app id="inspire">
            <v-select
                    :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                    label="Fizzbuzz"
            >
                <template v-slot:item="{ item, attrs, on }">
                    <v-list-item
                            v-bind="attrs"
                            v-on="on"
                    >
                        <v-list-item-title
                                :id="attrs['aria-labelledby']"
                                v-text="item"
                        ></v-list-item-title>
                    </v-list-item>
                </template>
            </v-select>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Accessibility",
    }
</script>

<style lang="scss">
    @import './src/styles/variables';

    .custom-class {
        width: 300px;
        padding: 10px;
        border-radius: $border-radius-root;
    }
</style>