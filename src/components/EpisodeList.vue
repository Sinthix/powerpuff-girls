<template>
  <div>
    <h2>Episodes</h2>
    <ul>
      <li v-for="episode in episodes" :key="episode.id">
        <router-link :to="{ name: 'episode', params: { id: episode.id }}">{{ episode.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'EpisodeList',
  setup() {
    const store = useStore();
    const route = useRoute();

    onMounted(() => {
      store.dispatch('fetchEpisodes');
    });

    return {
      episodes: store.state.episodes
    };
  }
});
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
a:hover {
  text-decoration: underline;
}
</style>
