<template>
  <div>
    <h2>Episodes</h2>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'EpisodeList',
  setup() {
    const store = useStore();

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
  margin-bottom: 20px;
}
.card {
  margin-bottom: 20px;
}
</style>
