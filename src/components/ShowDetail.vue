<template>
  <div>
    <h1>{{ show.name }}</h1>
    <img :src="show.image ? show.image.original : 'https://via.placeholder.com/210x295'" class="img-fluid mb-4" :alt="show.name">
    <p v-html="show.summary"></p>
    <EpisodeList />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import EpisodeList from './EpisodeList.vue';

export default defineComponent({
  name: 'ShowDetail',
  components: {
    EpisodeList
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('fetchShow');
    });

    return {
      show: store.state.show
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
</style>
