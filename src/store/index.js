import Vue from 'vue';
import Vuex from 'vuex';
import { createModule } from 'vuex-toast';
import 'vuex-toast/dist/vuex-toast.css';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import web3 from '../utils/web3';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        toast: createModule({
            dismissInterval: 10000,
        }),
    },
    state: {
        isWalletInstalled: typeof window.web3 !== 'undefined',
        ethNetwork: '',
        web3,
        totalVotes: 0,
        address: null,
        votingInProgress: false,
        cowImages: [],
    },
    getters,
    mutations,
    actions,
});
