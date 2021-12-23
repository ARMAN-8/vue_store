import {createStore} from 'vuex';
/*import Vuex from "vuex";
import Vue from 'vue'*/

/*Vue.use(Vuex);*/


export default createStore({
    state: {
        totalBookCount: 10, // Buy 10 Books
        isTomHappy: true,
        isJerryHappy: true,
    },
    getters: {
        // Here we will create a getter
        happyStaff: state => {
            return state.isTomHappy && state.isJerryHappy
        }
    },
    mutations: {
        // Here we will create Jerry
        removeBook(state, amount) {
            // For now we allow Jerry just to remove
            // one TV at a time.
            state.totalBookCount -= amount
        }
    },
    actions: {
        // Here we will create Tom
        removeBook(context, amount) {
            //For now we only remove a tv
            //but this action can contain logic
            //so we could expand it in the future
            if (context.state.totalBookCount >= amount) {
                // if we enough TV's asl Jerry to remove it
                context.commit('removeBook', amount)
            }
        }
    },
    /*modules: {}*/
})
