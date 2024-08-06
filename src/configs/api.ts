export const API_BASE_URL = 'https://api.tvmaze.com';
export const SHOW_ID = '6771';

export const API_ENDPOINTS = {
  SHOW: `${API_BASE_URL}/shows/${SHOW_ID}`,
  EPISODES: `${API_BASE_URL}/shows/${SHOW_ID}/episodes`,
  EPISODE: (id: string) => `${API_BASE_URL}/episodes/${id}`,
};
