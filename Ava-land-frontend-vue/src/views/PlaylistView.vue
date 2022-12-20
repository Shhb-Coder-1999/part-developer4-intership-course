<template>
  <div class="playlist">
    <vPlaylistIntro :playlist="store.state.playlist.playlist" />
    <vPlaylistModal />
    <vDeleteModal action="deletePlaylistSong" />
    <vPlaylistTable :playlist="store.state.playlist.playlistSongs" />
  </div>
</template>

<script setup>
import vPlaylistIntro from "../components/playlistIntro.vue";
import vPlaylistTable from "../components/playlistTable.vue";
import vPlaylistModal from "../components/Modals/playlistModal.vue";
import vDeleteModal from "../components/Modals/deleteModal.vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useStore();

store.dispatch("getPlaylistInfo", route.params.id);
store.dispatch("getPlaylistsSongs", route.params.id);
</script>

<style lang="scss" scoped>
.playlist {
  padding-bottom: 100px;
  width: 88%;
}

@media screen and (max-width: 768px) {
  .playlist {
    width: 100%;
  }
}
</style>
