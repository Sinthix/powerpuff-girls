<!-- src/components/ShowDetail.vue -->
<template>
  <div>
    <h1>{{ show.name }}</h1>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <img v-else :src="show.image ? show.image.original : 'https://via.placeholder.com/210x295'" class="img-fluid mb-4" :alt="show.name" />
    <p v-if="!loading" v-html="show.summary"></p>
    <EpisodeList />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import EpisodeList from './EpisodeList.vue';

export default defineComponent({
  name: 'ShowDetail',
  components: {
    EpisodeList
  },
  setup() {
    const store = useStore();
    const show = ref<any>({});
    const loading = ref(true);

    onMounted(async () => {
      try {
        await store.dispatch('fetchShow');
        show.value = store.state.show;
      } catch (error) {
        console.error('Error fetching show:', error);
      } finally {
        loading.value = false;
      }
    });

    return {
      show,
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
</style>
