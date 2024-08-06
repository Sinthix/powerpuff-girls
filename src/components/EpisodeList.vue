<template>
  <div>
    <h2>Episodes</h2>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="Object.keys(episodesBySeason).length > 0">
      <div v-for="(episodes, season) in episodesBySeason" :key="season">
        <h3>Season {{ season }}</h3>
        <div class="row g-4">
          <div v-for="episode in episodes" :key="episode.id" class="col-2">
            <div class="card h-100">
              <img :src="episode.image ? episode.image.medium : 'https://via.placeholder.com/110x65'" class="card-img-top" :alt="episode.name" />
              <div class="card-body">
                <h6 class="card-title">{{ episode.name }}</h6>
                <router-link :to="{ name: 'episode', params: { id: episode.id }}" class="btn btn-primary">View Details</router-link>
              </div>
            </div>
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
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'EpisodeList',
  setup() {
    const store = useStore();
    const episodes = ref<any[]>([]);
    const loading = ref(true);

    const fetchEpisodes = async () => {
      try {
        await store.dispatch('fetchEpisodes');
        episodes.value = store.state.episodes;
      } catch (error) {
        console.error('Error fetching episodes:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchEpisodes();
    });

    const episodesBySeason = computed(() => {
      const grouped: { [key: number]: any[] } = {};
      episodes.value.forEach(episode => {
        const season = episode.season;
        if (!grouped[season]) {
          grouped[season] = [];
        }
        grouped[season].push(episode);
      });
      return grouped;
    });

    return {
      episodesBySeason,
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
h3 {
  margin-top: 20px;
}
.card {
  margin-bottom: 20px;
}
.col-2 {
  flex: 0 0 10%;
  max-width: 10%;
}
</style>
