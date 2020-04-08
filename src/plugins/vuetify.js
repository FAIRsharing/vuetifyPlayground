import Vue from 'vue';
import Vuetify from 'vuetify/lib';


// import colors from 'vuetify/lib/util/colors';
import light from './theme'
import customIcons from './icons'
import customBreakPoints from './breakPoints'
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // dark:true
        themes: {light},
        options: {
            customProperties: true,
        },
    },
    iconfont: 'mdi',
    icons: customIcons,
    breakpoint: customBreakPoints,
});


/*
      light: {
        primary: '#3f51bf',
        secondary: '#009688',
        accent: colors.teal.lighten3,
        // error: '#FF5252',
        // info: '#2196F3',
        // success: '#4CAF50',
        // warning: '#FFC107'
      },
*/

