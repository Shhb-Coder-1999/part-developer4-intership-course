<template>
  <div class="playlistIntro main__playlist" dir="RTL">
    <div
      class="cover playlistIntro__cover"
      :style="{
        backgroundImage: 'url(' + props.playlist.img + ')',
      }"
    >
      <div class="btns cover__btns">
        <input class="btns__input" type="checkbox" name="play" id="play" />
        <label for="play" class="btns--playIcon"></label>
      </div>
    </div>
    <div class="description playlistIntro__description">
      <div class="banner description__banner">
        <span class="banner__text">لیست پخش</span>
      </div>
      <div class="title description__title">
        <h2 class="title--h2">{{ props.playlist.name }}</h2>
      </div>
      <div class="details description__details">
        <div class="songCnt details__songCnt">
          <img
            class="songCnt__icon"
            src="../assets/logos/main-icons/linear/musicFilter.png"
            alt=""
          />
          <span class="songCnt__text">
            {{ props.playlist.trackAmount }} آهنگ</span
          >
        </div>
        <hr class="verHr details__hr" />
        <div class="duration details__duration">
          <img
            class="duration__icon"
            src="../assets/logos/main-icons/linear/orangeClock.png"
            alt=""
          />
          <span class="duration__text"> {{ props.playlist.duration }}</span>
        </div>
      </div>
      <div class="actionBtns description__actionBtns">
        <div class="like actionBtns__like">
          <!-- <input class="like__input" type="checkbox" name="heart" id="heart7" />
          <label for="heart7" class="like__btn"></label> -->
        </div>
        <div class="share actionBtns__share">
          <button class="share__btn"></button>
        </div>

        <div class="more actionBtns__more">
          <dropDown :options="options" class="more__btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dropDown from "./appDropdown.vue";

import { ref } from "vue";

import { defineProps } from "vue";
const props = defineProps({
  playlist: Object,
});

// const playlist = computed(() => store.getter.getPlaylistById(Number(route.params.id)));

const options = ref([
  {
    title: "حذف",
    iconSrc: new URL("../assets/logos/svg/bold/trash.svg", import.meta.url),
    alt: "trashIcon",
    flag: true,
  },
  {
    title: "تغییر نام لیست",
    iconSrc: new URL("../assets/logos/svg/bold/edit.svg", import.meta.url),
    alt: "editIcon",
    flag: true,
  },
]);
</script>

<style lang="scss" scoped>
.playlistIntro {
  margin: 60px 40px 0px 130px;
  padding: 10px 0px;
  width: 100%;
  height: 200px;
  background-image: url(../assets/images/platlist-intro-bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  display: flex;

  &__cover {
    margin: auto 40px;
  }

  &__description {
    margin: auto 0px;
  }

  .cover {
    position: relative;
    width: 15%;
    height: 150px;
    background-image: url(../assets/images/batelCover.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .description {
    width: 40%;
    &__actionBtns {
      margin-top: 16px;
    }
  }

  .banner {
    &__text {
      width: 70px;
      height: 20px;
      border-radius: 16px;
      padding: 3px 9px;
      text-align: center;
      font-size: 12px;
      color: $orange;
      background-color: $darkOrange;
    }
  }

  .title {
    &--h2 {
      color: $pure-white;
      margin: 7px 0px;
    }
  }

  .details {
    display: flex;
  }

  .verHr {
    border: none;
    border-left: 1.1px solid hsla(200, 10%, 50%, 100);
    width: 1px;
    height: 17px;
    margin: 2px 10px;
  }

  .songCnt {
    text-align: center;
    color: $gray;
    &__text {
      vertical-align: middle;
      font-size: 12px;
      font-weight: 400;
    }
    &__icon {
      vertical-align: middle;
      width: 20px;
      height: 20px;
      margin: 0px 4px;
    }
  }

  .duration {
    text-align: center;
    color: $gray;
    &__text {
      vertical-align: middle;
      font-size: 12px;
      font-weight: 400;
      margin: 0px 4px;
    }
    &__icon {
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }

  .btns {
    &--playIcon {
      position: absolute;
      top: 110px;
      cursor: pointer;
      display: block;
      border-style: none;
      border-radius: 50%;
      background-color: #ffa928;
      width: 45px;
      height: 45px;
      background-image: url(../assets/logos/svg/bold/playIcon.svg);
      background-position: center;
      background-repeat: no-repeat;
      padding: 10px;
    }
    &__input {
      display: none;
    }
    &__input:checked + .btns--playIcon {
      background-image: url(../assets/logos/svg/bold/pause.svg);
    }
  }

  .actionBtns {
    display: flex;
  }

  .like {
    &__btn {
      display: block;
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 24px;
      height: 24px;
      background-image: url(../assets/logos/svg/bold/heart.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
    &__input {
      display: none;
    }
    &__input:checked + .like__btn {
      background-image: url(../assets/logos/svg/bold/orangeHeart.svg);
    }
  }

  .share {
    margin-right: 15px;
    &__btn {
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 22px;
      height: 22px;
      background-image: url(../assets/logos/svg/bold/share.svg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .more {
    margin-right: 15px;
  }
}

.options {
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 1;
  width: 100%;
  margin-top: 3px;
  background: #fff;
  border-radius: 10px;
}

/* Option */
.option {
  padding: 5px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  font: 1.2rem "Vollkorn", Georgia, Times, serif;
}

/* Hover state */
.option:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

@media screen and (max-width: 768px) {
  .playlistIntro {
    width: unset;
    margin: 30px 10px;
    .lyric {
      display: none;
    }
    .description {
      width: 60%;
    }

    .cover {
      width: 40%;
      margin: auto 25px;
    }
  }
}
</style>
