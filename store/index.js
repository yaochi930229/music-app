import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		$baseUrl: 'http://127.0.0.1:3000',
		homeToList: ''
	},
	mutations: {
		CHANG_HOME_TO_LIST(state, payload) {
			state.homeToList = payload
		}
	},
})
export default store;