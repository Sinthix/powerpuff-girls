<template>
  <div>
    <h1>{{ show.name }}</h1>
    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <div v-else-if="error" class="text-center">
      <p>{{ errorMessage }}</p>
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

/** I could and should create a fodlder for the interfaces 
 so I wouldn't repeat myself but this is just to show 
how to fix the "any's" **/

interface Show {
  id: number;
  name: string;
  image: { original: string } | null;
  summary: string;
}

export default defineComponent({
  name: 'ShowDetail',
  components: {
    EpisodeList
  },
  setup() {
    const store = useStore();
    const show = ref<Show | null>(null);
    const loading = ref(true);
    const error = ref(false);
    const errorMessage = ref('Error fetching show details. Please try again later.');

    onMounted(async () => {
      try {
        await store.dispatch('fetchShow');
        show.value = store.state.show;
      } catch (err) {
        error.value = true;
        if (err instanceof Error) {
          errorMessage.value = `Error fetching show: ${err.message}`;
        }
      } finally {
        loading.value = false;
      }
    });

    return {
      show,
      loading,
      error,
      errorMessage
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
