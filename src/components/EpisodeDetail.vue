<template>
  <div>
    <h1 v-if="!loading">{{ episode.name }}</h1>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <img v-if="!loading && episode.image" :src="episode.image.original" class="img-fluid mb-4" :alt="episode.name" />
    <p v-if="!loading" v-html="episode.summary"></p>
    <div v-if="!loading && !episode.image">
      <img src="https://via.placeholder.com/210x295" class="img-fluid mb-4" :alt="episode.name" />
    </div>
    <router-link :to="{ name: 'show' }" class="btn btn-secondary">Back to Show</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'EpisodeDetail',
  setup() {
    const route = useRoute();
    const store = useStore();
    const episode = ref<any>({});
    const loading = ref(true);
    const episodeId = route.params.id as string;

    onMounted(async () => {
      try {
        await store.dispatch('fetchEpisode', episodeId);
        episode.value = store.state.episodes.find((ep: any) => ep.id === parseInt(episodeId));
      } catch (error) {
        console.error('Error fetching episode:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      episode,
      loading
    };
  }
});
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
p {
  margin-bottom: 40px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}
.btn {
  margin-top: 20px;
}
</style>
