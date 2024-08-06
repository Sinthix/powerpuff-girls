<!-- src/components/EpisodeList.vue -->
<template>
  <div>
    <h2>Episodes</h2>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="episodes.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="episode in episodes" :key="episode.id" class="col">
        <div class="card h-100">
          <img :src="episode.image ? episode.image.medium : 'https://via.placeholder.com/210x295'" class="card-img-top" :alt="episode.name">
          <div class="card-body">
            <h5 class="card-title">{{ episode.name }}</h5>
            <router-link :to="{ name: 'episode', params: { id: episode.id }}" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <p>No episodes available.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'EpisodeList',
  setup() {
    const store = useStore();
    const episodes = ref<any[]>([]);
    const loading = ref(true);

    onMounted(async () => {
      try {
        await store.dispatch('fetchEpisodes');
        episodes.value = store.state.episodes;
      } catch (error) {
        console.error('Error fetching episodes:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      episodes,
      loading
    };
  }
});
</script>

<style scoped>
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
