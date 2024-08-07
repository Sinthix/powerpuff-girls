import { createStore } from 'vuex';
import axios from 'axios';
import { API_ENDPOINTS } from '../configs/api';


/** I could and should create a fodlder for the interfaces 
 so I wouldn't repeat myself but this is just to show 
how to fix the "any's" **/

interface Show {
  id: number;
  name: string;
  image: { original: string };
  summary: string;
}

interface Episode {
  id: number;
  name: string;
  season: number;
  image: { medium: string };
}

interface State {
  show: Show | {};
  episodes: Episode[];
}

const store = createStore<State>({
  state: {
    show: {},
    episodes: []
  },
  mutations: {
    setShow(state, show: Show) {
      state.show = show;
    },
    setEpisodes(state, episodes: Episode[]) {
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
