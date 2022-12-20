<template>
  <div class="musicIntro main__playlist" dir="RTL">
    <div
      class="cover musicIntro__cover"
      :style="{
        backgroundImage: 'url(' + music.img + ')',
      }"
    >
      <div class="btns cover__btns">
        <input
          class="btns__input"
          type="checkbox"
          name="playIcon"
          :id="`playIntro${music.id}`"
          :checked="store.getters.getPlayedMusic.flag"
        />
        <label
          :for="`playIntro${music.id}`"
          class="btns--playIcon"
          @click="changeSongFlag()"
          @click.once="changeNavMusic(music)"
        ></label>
      </div>
    </div>
    <div class="description musicIntro__description">
      <div class="title description__title">
        <h2 class="title--h2">{{ music.name }}</h2>
      </div>
      <div class="details description__details">
        <div class="songCnt details__songCnt">
          <img
            class="songCnt__icon"
            src="../assets/logos/svg/bold/person.svg"
            alt=""
          />
          <span class="songCnt__text"> {{ music.artist }}</span>
        </div>
        <hr class="verHr details__hr" />
        <div class="duration details__duration">
          <img
            class="duration__icon"
            src="../assets/logos/main-icons/linear/orangeClock.png"
            alt=""
          />
          <span class="duration__text">
            {{ music.duration }}
          </span>
        </div>
      </div>
      <div class="actionBtns description__actionBtns">
        <div class="like actionBtns__like">
          <input
            class="like__input"
            type="checkbox"
            name="heart"
            :id="`like${music.id}`"
            :checked="music.like"
          />
          <label
            :for="`like${music.id}`"
            class="like__btn"
            @click="likeMusic(music.id)"
          ></label>
        </div>
        <div class="share actionBtns__share">
          <button class="share__btn"></button>
        </div>

        <div class="more actionBtns__more">
          <dropDown :options="options" :song="music" class="more__btn" />
        </div>
      </div>
    </div>
    <div class="lyric lyric__description">
      <!-- <p v-for="(p, index) in selectedSong.lyric[0]" :key="index">
        {{ p }} <br />
        <br />
      </p>
      <div v-if="moreLyric">
        <p v-for="(p, index) in selectedSong.lyric[1]" :key="index">
          {{ p }} <br />
          <br />
        </p> -->

      <!-- </div> -->
      <p>{{ music.description }}</p>

      <button class="moreLyricBtn" @click="moreLyric = !moreLyric">
        <span class="moreLyricBtn__text">مشاهده بیشتر</span>
        <img
          src="../assets/logos/svg/bold/bottomVector.svg"
          alt="bottomVector"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import dropDown from "./appDropdown.vue";
// import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
// const route = useRoute();
// const router = useRouter();
let moreLyric = ref(false);

const music = computed(() => store.getters.getMusic);
const playedMusic = computed(() => store.getters.getPlayedMusic);

const changeSongFlag = () => {
  store.getters.getPlayedMusic.flag = !store.getters.getPlayedMusic.flag;
  console.log("playedMusic.value.flag:", playedMusic.value.flag);
};

const changeNavMusic = (music) => {
  store.dispatch("playMusic", music);
};

const likeMusic = (id) => {
  console.log(id);
  store.dispatch("likeMusic", id);
};
const options = ref([
  {
    title: " ویرایش آهنگ",
    iconSrc: new URL("../assets/logos/svg/bold/editMusic.svg", import.meta.url),
    alt: "trashIcon",
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
  {
    title: " حذف آهنگ ",
    iconSrc: new URL("../assets/logos/svg/bold/trash.svg", import.meta.url),
    alt: "trashIcon",
    flag: true,
    model: "showDeleteModal",
  },
]);
</script>

<style lang="scss" scoped>
.musicIntro {
  margin: 60px 40px 0px 130px;
  padding: 10px 0px;
  background-image: url(../assets/images/musicIntroBg.png);
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
    width: 25%;
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
    &__input:hover + .like__btn {
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
  .lyric {
    padding-top: 20px;
    width: 30%;
    font-size: 12px;
  }

  .moreLyricBtn {
    background: none !important;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: #ffa928;

    &__text {
      padding-left: 12px;
    }
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
  .musicIntro {
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
