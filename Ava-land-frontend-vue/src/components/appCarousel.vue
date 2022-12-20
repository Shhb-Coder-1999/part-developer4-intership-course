<template>
  <div id="app" class="app-container">
    <h3 class="title">محبوب‌ترین‌ها از همین خواننده</h3>

    <Carousel :items-to-show="7" class="Carousel" :breakpoints="breakpoints">
      <Slide
        v-for="music in props.musics"
        :key="music.id"
        class="song"
        dir="rtl"
      >
        <div class="img" @click="goToRoute(song.id)">
          <img :src="music.img" alt="" class="image" />
        </div>
        <div class="details">
          <span @click="goToRoute(music.id)">{{ music.name }}</span>
          <div class="more actionBtns__more">
            <dropDown :options="options" :song="music" />
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import dropDown from "./appDropdown.vue";
import { useRouter } from "vue-router";
import { ref, defineProps } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const router = useRouter();

const props = defineProps({
  musics: Array,
});

const breakpoints = ref({
  1000: {
    itemsToShow: 6,
  },

  // 700px and up
  768: {
    itemsToShow: 4.5,
  },
  // 600 and up
  600: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },

  0: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
});

const goToRoute = (id) => {
  router.push(`/music/${Number(id)}`);
};

const options = ref([
  {
    title: " ویرایش آهنگ",
    iconSrc: new URL("../assets/logos/svg/bold/editMusic.svg", import.meta.url),
    alt: "editMusic",
    flag: true,
    model: "showEditSongModal",
  },
  {
    title: "اضافه کردن به لیست پخش",
    iconSrc: new URL(
      "../assets/logos/svg/bold/receipt-square-orange.svg",
      import.meta.url
    ),
    alt: "editIcon",
    flag: true,
    model: "showPlaylistModal",
  },
]);
</script>

<style lang="scss">
.app-container {
  height: 100%;
  margin: 30px 40px 0px 130px;
  padding-bottom: 100px;
  //   overflow: hidden;
}

.title {
  margin-bottom: 30px;
  color: #ffffff;
}

.transition-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #ffffff;
  // overflow-x: hidden;
}

.image {
  height: 150px;
  width: auto;
  z-index: 10;
  pointer-events: none;
}

.image:first-child {
  z-index: 5;
}

.image:last-child {
  z-index: 5;
}

.previous {
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 15;
  height: 36px;
  width: 36px;
  background-image: url(../assets/logos/svg/bold/leftArrow.svg);
  background-size: contain;
  cursor: pointer;
  background-color: transparent;
}

.next {
  position: absolute;
  right: 0;
  top: 50%;
  z-index: 15;
  height: 36px;
  width: 36px;
  background-image: url(../assets/logos/svg/bold/rigthArrow.svg);
  background-size: contain;
  cursor: pointer;
  background-color: transparent;
}

.swipe-move {
  transition: all 0.3s;
}

.song {
  align-self: flex-start;
  margin: 0px 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
}

.carousel__prev,
.carousel__next {
  position: absolute;
  top: 75px;
  background: gray;
}

.details {
  width: 150px;
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .app-container {
    margin: 20px 20px;

    // .Carousel {
    //   display: none;
    // }
  }
}
</style>
