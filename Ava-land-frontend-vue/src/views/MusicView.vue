<template>
  <div class="music">
    <vMusicIntro class="music__Intro" />
    <vPlaylistModal />
    <vDeleteModal action="deleteMusic" />
    <vEditSongModal />

    <vMusicCarousel v-if="!isSmallDevice" :musics="similarMusics" />
    <vSimilarSongsTable :playlist="similarMusics" v-else />
  </div>
</template>

<script setup>
import vMusicIntro from "../components/musicIntro.vue";
import vMusicCarousel from "../components/appCarousel.vue";
import vPlaylistModal from "../components/Modals/playlistModal.vue";
import vDeleteModal from "../components/Modals/deleteModal.vue";
import vEditSongModal from "../components/Modals/editSongModal.vue";
import vSimilarSongsTable from "../components/playlistTable.vue";
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();

/* data */
const music = computed(() => store.getters.getMusic);
const isSmallDevice = ref(true);
//

watch(route.path, () => {
  store.dispatch("getMusic", route.params.id);
  store.dispatch("getSimilarMusics", music.value.producer_id);
});

store.dispatch("getMusic", route.params.id);
store.dispatch("getSimilarMusics", music.value.producer_id);

const similarMusics = computed(() => store.getters.getSimilarMusics);

const SmallDevice = () => {
  return window.innerWidth <= 768
    ? (isSmallDevice.value = true)
    : (isSmallDevice.value = false);
};
SmallDevice();
// Created Hook
window.addEventListener("resize", SmallDevice);
onBeforeUnmount(() => {
  window.removeEventListener("resize", SmallDevice);
});
</script>

<style lang="scss" scoped>
.music {
  width: 100%;
}

@media only screen and (max-width: 1200px) {
}

@media only screen and (max-width: 768px) {
  .music {
    width: 100%;
  }
}
</style>
