<template>
  <div>
    <h1>{{ show.name }}</h1>
    <p v-html="show.summary"></p>
    <ul>
      <li v-for="episode in episodes" :key="episode.id">
        <router-link :to="'/episode/' + episode.id">{{ episode.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const show = computed(() => store.state.show);
    const episodes = computed(() => store.state.episodes);

    store.dispatch('fetchShow');
    store.dispatch('fetchEpisodes');

    return { show, episodes };
  }
});
</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
