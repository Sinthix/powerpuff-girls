import { createStore } from 'vuex';
import axios from 'axios';

interface State {
  show: any;
  episodes: any[];
}

const BASE_URL = "https://api.tvmaze.com"

const store = createStore<State>({
  state: {
    show: {},
    episodes: []
  },
  mutations: {
    setShow(state, show) {
      state.show = show;
    },
    setEpisodes(state, episodes) {
      state.episodes = episodes;
    }
  },
  actions: {
    async fetchShow({ commit }) {
      const response = await axios.get(`${BASE_URL}/shows/6771`);
      commit('setShow', response.data);
    },
    async fetchEpisodes({ commit }) {
      const response = await axios.get(`${BASE_URL}/shows/6771/episodes`);
      commit('setEpisodes', response.data);
    }
  }
});

export default store;
