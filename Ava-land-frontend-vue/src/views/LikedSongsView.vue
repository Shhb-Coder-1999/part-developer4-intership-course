<template>
  <div class="liked-playlist">
    <h2>لیست مورد علاقه</h2>
    <vPlaylistModal />
    <vDeleteModal action="deleteMusic" />
    <vLikedSongsTable :playlist="likedMusics" v-if="likedMusics" />
    <div v-else>
      <span class="liked-playlist__empty-message"
        >لیست آهنگ های مورد علاقه شما خالی است !</span
      >
    </div>
  </div>
</template>

<script setup>
import vLikedSongsTable from "../components/playlistTable.vue";
import vPlaylistModal from "../components/Modals/playlistModal.vue";
import vDeleteModal from "../components/Modals/deleteModal.vue";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

store.dispatch("getLikedMusic");
const likedMusics = computed(() => store.getters.getLikedMusics);
</script>

<style lang="scss" scoped>
h2 {
  margin: 50px 50px 0px 0px;
}
.liked-playlist {
  padding-bottom: 10px;
  width: 88%;
  color: $pure-white;
  &__empty-message {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: $gray;
  }
}

@media screen and (max-width: 768px) {
  .liked-playlist {
    width: 100%;
  }
}
</style>
