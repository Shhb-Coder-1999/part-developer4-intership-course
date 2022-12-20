<template>
  <div class="playlistArchive">
    <h2 class="title">لیست پخش ها</h2>
    <div class="playlistItem">
      <div v-for="(playlist, i) in props.playlist" :key="i" class="playlist">
        <div class="img" @click="goToRoute(playlist.id)">
          <img :src="playlist.img" alt="" class="image" />
        </div>
        <br />
        <div class="details">
          <span @click="goToRoute(playlist.id)">{{ playlist.name }}</span>
          <div class="more actionBtns__more">
            <dropDown
              :options="options"
              :playlist="playlist"
              class="more__btn"
              position="right"
            />
          </div>
        </div>
        <div class="createdBy">
          <span class="createdBy__text">ایجاد شده توسط شهاب</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dropDown from "./appDropdown.vue";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
import { ref, defineProps } from "vue";
const router = useRouter();
// const store = useStore();

const props = defineProps({
  playlist: {
    type: Array,
    default: () => [],
  },
});

console.log("props.playlist", props.playlist);

const goToRoute = (id) => {
  router.push(`/playlistsArchive/playlist${Number(id)}`);
};

const options = ref([
  {
    title: "حذف",
    iconSrc: new URL("../assets/logos/svg/bold/trash.svg", import.meta.url),
    alt: "trashIcon",
    flag: true,
    model: "showDeleteModal",
  },
  {
    title: "تغییر نام لیست",
    iconSrc: new URL("../assets/logos/svg/bold/editMusic.svg", import.meta.url),
    alt: "editIcon",
    flag: true,
    model: "showEditSongModal",
  },
]);
</script>

<style scoped lang="scss">
.playlistArchive {
  margin: 60px 40px 0px 130px;
  padding: 10px 0px;
  width: 100%;
  color: #ffffff;
  line-height: 15px;
}

.playlistItem {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background: rgba(70, 70, 70, 0.4);
  border-radius: 24px;
}

.playlist {
  margin: 30px;
  cursor: pointer;
}

.image {
  width: 180px;
  height: 180px;
  cursor: pointer;
}

.details {
  display: flex;
  justify-content: space-between;
}

.createdBy {
  &__text {
    font-size: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .playlistArchive {
    width: 100%;
    margin: 0px;

    .title {
      margin: 30px 18px;
    }
    .playlistItem {
      margin: 20px 18px;
    }
    .playlist {
      width: 25%;
      margin: 20px 14px;
    }
    .image {
      width: 100%;
      height: auto;
    }
  }
}
</style>
