<template>
  <div v-if="episode">
    <h1>{{ episode.name }}</h1>
    <p v-html="episode.summary"></p>
    <p><strong>Airdate:</strong> {{ episode.airdate }}</p>
    <p><strong>Runtime:</strong> {{ episode.runtime }} minutes</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default defineComponent({
  setup() {
    const route = useRoute();
    const episode = computed(() => null);
    
    const fetchEpisode = async (id: string) => {
      const response = await axios.get(`https://api.tvmaze.com/episodes/${id}`);
      episode.value = response.data;
    };

    onMounted(() => {
      fetchEpisode(route.params.id as string);
    });

    return { episode };
  }
});
</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
