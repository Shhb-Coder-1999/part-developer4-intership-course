<template>
  <div class="landingPage">
    <div class="main landingPage__main">
      <img
        class="banner main__banner"
        src="../assets/images/banner.svg"
        alt="bannerImg"
      />

      <div class="popularSongs main__popularSongs">
        <div class="header popularSongs__header">
          <div class="title header__title">
            <h3>جدیدترین آهنگ های این هفته</h3>
          </div>
          <button class="subtitle header__subtitle">مشاهده همه</button>
        </div>
        <carousel
          class="carousel popularSongs__carousel"
          :autoplay="3500"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="(item, index) in store.state.popularSong" :key="index">
            <div class="card carousel__card">
              <img class="cover card__cover" :src="item.coverPath" alt="" />
              <div
                class="coverMob card__coverMob"
                :style="{
                  backgroundImage: 'url(' + item.coverPath + ')',
                }"
              >
                <div class="text cover__text">
                  <span class="songName details__songName">{{ item.name }}</span>
                  <br />
                  <span class="artist details__artist">{{ item.artist }}</span>
                </div>
              </div>
              <br />
              <div class="details card__details">
                <span class="songName details__songName">{{ item.name }}</span>
                <br />
                <span class="artist details__artist">{{ item.artist }}</span>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>

      <div class="playlist main__playlist">
        <div class="header playlist__header">
          <div class="title header__title">
            <h3>لیست پخش منتخب</h3>
          </div>
          <button class="subtitle header__subtitle">مشاهده همه</button>
        </div>
        <carousel
          class="carousel playlist__carousel"
          :autoplay="4500"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="(item, index) in store.state.popularSong" :key="index">
            <div class="card carousel__card">
              <img class="cover card__cover" :src="item.coverPath" alt="" />
              <div
                class="coverMob card__coverMob"
                :style="{
                  backgroundImage: 'url(' + item.coverPath + ')',
                }"
              >
                <div class="text cover__text">
                  <span class="songName details__songName">{{ item.name }}</span>
                  <br />
                  <span class="artist details__artist">{{ item.artist }}</span>
                </div>
              </div>
              <br />
              <div class="details card__details">
                <span class="songName details__songName">{{ item.name }}</span>
                <br />
                <span class="artist details__artist">{{ item.artist }}</span>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
    </div>

    <div class="leftSidebar landingPage__leftSidebar">
      <div class="premAcc leftSidebar__premAcc">
        <premAcc class="premAcc__compo" />
      </div>

      <div class="info leftSidebar__info">
        <div class="optionBtn info__optionBtn">
          <div
            class="history optionBtn__history"
            :class="{
              history: true,
              optionBtn__history: true,
              'history--active': leftSidebarToggle,
            }"
            @click="(leftSidebarToggle = true), changeList(playedHistory)"
          >
            <span>تاریخچه پخش</span>
          </div>
          <div
            :class="{
              popSongs: true,
              optionBtn__history: true,
              'popSongs--active': !leftSidebarToggle,
            }"
            @click="(leftSidebarToggle = false), changeList(popularMusics)"
          >
            <span>محبوب ترین آهنگ ها</span>
          </div>
        </div>

        <div class="lists info__lists">
          <ul class="ul lists__ul">
            <li class="li ul__li" v-for="music in leftSideList" :key="music.id">
              <img class="cover li__cover" :src="music.img" alt="" />
              <div class="description li__description">
                <h4 class="h4 description__h4">{{ music.name }}</h4>
                <div class="details description__details">
                  <div class="likes">
                    <label class="likes__icon"></label>
                    <span>{{ music.likes }}</span>
                  </div>
                  <div class="playCount">
                    <label class="playCount__icon"></label>
                    <span>{{ music.playCount }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import premAcc from "../components/premiumAccount.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { useStore } from "vuex";
const store = useStore();

store.dispatch("getPopularMusics");
store.dispatch("getPlayedHistory");

const popularMusics = computed(() => store.getters.getPopularMusics);
const playedHistory = computed(() => store.getters.getPlayedHistory);

const leftSideList = ref(popularMusics.value);

const changeList = (list) => {
  leftSideList.value = list;
};

const leftSidebarToggle = ref(false);
const breakpoints = ref({
  // 700px and up
  768: {
    itemsToShow: 5,
  },
  // 600 and up
  600: {
    itemsToShow: 4,
    snapAlign: "start",
  },

  0: {
    itemsToShow: 3,
    snapAlign: "start",
  },
});
</script>

<style lang="scss">
.landingPage {
  display: flex;
  justify-content: center;
  padding: 30px 10px 140px 30px;

  &__main {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__leftSidebar {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .banner {
    width: 92%;
    height: auto;
  }
  .leftSidebar {
    &__premAcc {
      margin-top: 30px;
    }
    &__info {
      margin-top: 60px;
    }
  }

  .main {
    &__popularSongs,
    &__playlist {
      margin-top: 60px;
    }
  }

  .carousel {
    text-align: end;
    background: rgba(70, 70, 70, 0.4);
    border-radius: 24px;
    padding: 10px 20px;
    .carousel__prev,
    .carousel__next {
      display: none !important;
    }
  }
  .cover {
    width: 90%;
    height: auto;
  }
  .details {
    line-height: 20px;
  }
  .artist {
    font-size: 10px;
  }

  .popularSongs,
  .playlist {
    &__header {
      margin-bottom: 20px;
    }
    width: 92%;
    .header {
      display: flex;
      justify-content: space-between;
    }

    .title {
      color: $pure-white;
    }

    .subtitle {
      color: $orange;
      border-style: none;
      background: none;
      cursor: pointer;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .optionBtn {
      line-height: 45px;
      text-align: center;
      display: flex;
      width: 100%;
      background: rgba(70, 70, 70, 0.4);
      border-radius: 16px;
    }
  }

  .optionBtn {
    .popSongs {
      width: 50%;
      cursor: pointer;
      &--active {
        background: linear-gradient(108.1deg, #fe8a48 -11.1%, #fda53e 112.32%);
        backdrop-filter: blur(5px);
        border-radius: 16px;
        color: $pure-white;
      }
    }
    .history {
      width: 50%;
      border-radius: 0px 16px 16px 0px;
      cursor: pointer;
      &--active {
        background: linear-gradient(108.1deg, #fe8a48 -11.1%, #fda53e 112.32%);
        backdrop-filter: blur(5px);
        border-radius: 16px;
        color: $pure-white;
      }
    }
  }

  .lists {
    &__ul {
      margin-top: 15px;
    }
  }

  .ul {
    background: rgba(70, 70, 70, 0.4);
    border-radius: 24px;
    height: 525px;
    overflow: auto;
    list-style-type: none;
    padding-inline-start: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    &__li {
      margin: 25px 0px;
    }
  }

  .li {
    cursor: pointer;
    display: flex;
    .cover {
      width: 20%;
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 5px 10px;
      .details {
        display: flex;
        font-size: 12px;
        .likes,
        .playCount {
          display: flex;
          line-height: 17px;
          padding-left: 20px;
        }
      }
    }
  }

  .likes {
    &__icon {
      display: block;
      background: transparent;
      border-style: none;
      width: 15px;
      height: 15px;
      background-image: url(../assets/logos/svg/bold/smallHeart.svg);
      background-position: center;
      background-repeat: no-repeat;
      margin-left: 5px;
    }
    &__input {
      display: none;
    }
    &__input:checked + .like__btn {
      background-image: url(../assets/logos/svg/bold/smallOrangeHeart.svg);
    }
  }

  .playCount {
    &__icon {
      display: block;
      background: transparent;
      border-style: none;
      width: 15px;
      height: 15px;
      background-image: url(../assets/logos/svg/bold/smallPlay.svg);
      background-position: center;
      background-repeat: no-repeat;
      margin-left: 5px;
    }
    &__input {
      display: none;
    }
    &__input:checked + .like__btn {
      background-image: url(../assets/logos/svg/bold/smallOrangeHeart.svg);
    }
  }

  .card {
    .coverMob {
      width: 120px;
      height: 120px;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
}

@media screen and (max-width: 1200px) {
  .landingPage {
    &__main {
      width: 95%;
    }
    .leftSidebar {
      display: none;
    }
    .popularSongs,
    .playlist {
      width: 100%;
    }
    .banner {
      width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .landingPage {
    padding: 30px 20px 140px 20px;
    &__main {
      width: 100%;
    }
    .leftSidebar {
      display: none;
    }
    .popularSongs,
    .playlist {
      width: 100%;
    }
    .banner {
      width: 100%;
    }
  }
}

@media screen and (min-width: 601px) {
  .coverMob {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .landingPage {
    padding: 30px 0px 140px 0px;

    .header {
      padding-right: 10px;
      padding-left: 10px;
    }
    .main__playlist {
      margin-top: 35px;
    }

    .cover {
      display: none;
    }

    .text {
      width: 96.5%;
      height: 40px;
      background: rgba(70, 70, 70, 0.4);
      backdrop-filter: blur(2px);
      border-radius: 0px 0px 8px 8px;
      color: $pure-white;
      line-height: 15px;
      padding: 5px 3px 0px 0px;
    }

    .carousel {
      border-radius: 0px;
      padding: 15px 0px;
    }

    .banner {
      width: auto;
    }

    .coverMob {
      display: flex;
      flex-direction: column;
      justify-content: end;
    }

    .main {
      &__banner {
        margin: 0px 20px;
      }
    }
    .carousel__slide {
      margin: 0px 7px;
    }
    .card {
      height: 120px;
    }
  }
}
</style>
