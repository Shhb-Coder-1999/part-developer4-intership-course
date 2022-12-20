<template>
  <div class="playlistArchive">
    <vPlaylistArchive
      :playlist="store.state.playlist.playlists"
      class="playlistArchive__list"
    />
    <vDeleteModal action="deletePlaylist" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import vPlaylistArchive from "../components/playlistArchive.vue";
import vDeleteModal from "../components/Modals/deleteModal.vue";
const store = useStore();
store.dispatch("getPlaylists");
</script>

<style lang="scss" scoped>
.playlistArchive {
  padding-bottom: 100px;
  width: 93%;
}

@media only screen and (max-width: 768px) {
  .playlistArchive {
    width: 100%;
  }
}
</style>
