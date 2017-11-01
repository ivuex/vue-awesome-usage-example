import './sass/index.sass';

import Vue from 'vue';

import 'vue-awesome/icons/flag';

import Icons from './components/Icons.vue';

new Vue({
    el: '#v',
    render(h){
        return h(Icons)
    }
});

