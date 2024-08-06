// src/store/index.ts
import { createStore } from 'vuex';
import axios from 'axios';
import { API_ENDPOINTS } from '../configs/api';

interface State {
  show: any;
  episodes: any[];
}

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
      try {
        const response = await axios.get(API_ENDPOINTS.SHOW);
        commit('setShow', response.data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    },
    async fetchEpisodes({ commit }) {
      try {
        const response = await axios.get(API_ENDPOINTS.EPISODES);
        commit('setEpisodes', response.data);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    },
    async fetchEpisode({ state }, id: string) {
      try {
        const episode = state.episodes.find(ep => ep.id === parseInt(id));
        if (!episode) {
          const response = await axios.get(API_ENDPOINTS.EPISODE(id));
          return response.data;
        }
        return episode;
      } catch (error) {
        console.error('Error fetching episode:', error);
        throw error;
      }
    }
  }
});

export default store;
