<template>
  <div>
    <nav class="musicNav scale-in-ver-bottom">
      <div class="musicDetails musicNav__musicDetails">
        <figure class="figure musicDetails__figure">
          <img class="figure__img" :src="playedMusic.img" alt="Cover" />
        </figure>
        <div class="titles musicDetails__titles">
          <span class="titles--h10">{{ playedMusic.name }}</span
          ><br />
          <span class="titles--sub">{{ playedMusic.artist }}</span>
        </div>
      </div>

      <div class="musicOperations musicNav__musicOperations">
        <div class="volume musicOperations__volume">
          <input
            v-model="Volume"
            class="volume__range"
            type="range"
            min="0"
            max="100"
            @change="changeVolume"
          />
        </div>
        <div class="duration musicOperations__duration">
          <div class="duration__totalTime">
            <span>{{ totalTime }}</span>
          </div>

          <AudioPlayer
            ref="audio"
            :option="{
              src: changeUrl,
              progressBarColor: 'orange',
              indicatorColor: 'white',
            }"
            class="duration__audioPlayer"
          />

          <div class="duration__remainTime">
            <span>{{ currentTime }}</span>
          </div>
        </div>
        <div class="tracksBtns musicDetails__tracksBtns">
          <button class="nextBtn tracksBtns__nextBtn"></button>
          <div class="playBtn tracksBtns__playBtn">
            <input
              class="playBtn__input"
              type="checkbox"
              name="play"
              :id="`play${playedMusic.id}`"
            />
            <label
              :for="`play${playedMusic.id}`"
              class="playBtn--playIcon"
              @click="changeSongFlag()"
            ></label>
          </div>
          <button
            class="previousBtn tracksBtns__previousBtn"
            @click="getPrevMusic()"
          ></button>
        </div>
        <div class="options musicOperations__options">
          <div class="like options__like">
            <input
              class="like__input"
              type="checkbox"
              name="heart"
              :id="`heart${playedMusic.id}`"
              :checked="playedMusic.like"
            />
            <label
              :for="`heart${playedMusic.id}`"
              class="like__btn"
              @click="likeMusic(playedMusic.id)"
            ></label>
          </div>

          <button class="option__btn"></button>
        </div>
      </div>

      <div class="music-mobile-details musicNav__music-mobile-details">
        <div class="details music-mobile-details__details">
          <figure class="figure details__figure">
            <img class="figure__img" :src="playedMusic.img" alt="Cover" />
          </figure>
          <span class="titles--h10">{{ playedMusic.name }}</span>
        </div>

        <div class="operations music-mobile-details__operations">
          <span class="titles--sub">{{ playedMusic.artist }}</span>
          <input
            :checked="changeBtnState"
            class="playBtn__input"
            type="checkbox"
            name="play"
            id="mobilePlatBtn"
          />
          <label
            @click="changeSongState()"
            for="mobilePlatBtn"
            class="playBtn--playIcon"
          ></label>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";
import { useStore } from "vuex";
onMounted(() => {
  audio.value.$el.children[2].crossOrigin = "use-credentials";
});

const store = useStore();

const audio = ref(null);

const Volume = ref(100);

const playedMusic = computed(() => store.getters.getPlayedMusic);

watch(playedMusic.value, () => {
  console.log(audio.value.isPlaying);
  // if (audio.value.isPlaying) audio.value.pause();
  // audio.value.pause();
  store.getters.getPlayedMusic.flag ? audio.value.pause() : audio.value.play();
});

const changeSongFlag = () => {
  console.log("before flag:", store.getters.getPlayedMusic.flag);
  store.getters.getPlayedMusic.flag = !store.getters.getPlayedMusic.flag;
  console.log("after flag:", store.getters.getPlayedMusic.flag);
};

const getPrevMusic = () => {
  store.dispatch("getPlayOn");
  store.dispatch("getPrevMusic");
};

const likeMusic = (id) => {
  store.dispatch("likeMusic", id);
};

const changeUrl = computed(() => {
  return `http://localhost:8000/musics/${store.state.music.playedMusic.id}/play`;
});

const changeVolume = () => {
  audio.value.audioPlayer.volume = 1 - Volume.value / 100;
};

const changeSongState = () => {
  console.log("audio.value.isPlaying:", playedMusic.value.flag);
  // if (audio.value.isPlaying) audio.value.play();
  playedMusic.value.flag ? audio.value.pause() : audio.value.play();
  // audio.value.isPlaying
};

const changeBtnState = computed(() => {
  if (audio.value == null) return false;
  return currentTime.value != "0:00" ? false : true;
});

const currentTime = computed(() => {
  if (audio.value == null) return "0:00";
  return convertTime(audio.value.currentTime);
});

const totalTime = computed(() => {
  if (audio.value == null) return "0:00";
  return convertTime(audio.value.totalTime);
});

const convertTime = (miliSec) => {
  let mins = ~~((miliSec % 3600) / 60);
  let secs = ~~miliSec % 60;
  let ret = "";
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
};
</script>

<style lang="scss">
.musicNav {
  padding-right: 230px;
  direction: rtl;
  position: fixed;
  z-index: 500;
  bottom: 0;
  height: 88px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: $dark4;
  backdrop-filter: blur(30px);

  &__musicDetails {
    margin: 12px 0px 12px 0px;
  }

  &__musicOperations {
    margin: auto 10px;
  }

  .music-mobile-details {
    display: none;
  }

  .musicOperations {
    display: flex;
    justify-content: start;
    width: 80%;

    &__duration {
      color: $pure-white;
      margin: auto 70px;
    }
  }

  .range {
    direction: ltr;
    &__input {
      cursor: pointer;
      background: linear-gradient(to right, $orange 0%, $orange 50%, #fff 50%, #fff 100%);
      border-radius: 8px;
      height: 5px;
      width: 400px;
      outline: none;
      transition: background 450ms ease-in;
      -webkit-appearance: none;

      &::range-thumb {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: white;
        border: 2px solid #1976d2;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
      }
      &::-webkit-slider-thumb {
        background-color: $pure-white;
        border: solid 6px $pure-white;
        border-radius: 0;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        -webkit-appearance: none;
      }
    }
  }

  .duration {
    width: 100%;
    display: flex;
    &__remainTime {
      margin-right: 12px;
      width: 50px;
      text-align: center;
    }
    &__totalTime {
      margin-left: 12px;
    }
    &__audioPlayer {
      width: 100%;
    }
  }
  .musicDetails {
    display: flex;
    justify-content: start;
    width: 10%;

    &__titles {
      margin: auto 0px;
    }
    &__tracksBtns {
      margin: auto 0px;
      margin-right: 35px;
    }
  }

  .figure {
    margin: 0px;
    &__img {
      width: 60px;
      height: 60px;
    }
  }

  .titles {
    padding: 0px 10px;
    &--h10 {
      font-size: 14px;
      font-weight: 600;
      color: $pure-white;
    }
    &--sub {
      font-size: 10px;
      font-weight: 600;
      color: $gray;
    }
  }

  .volume {
    margin: auto 0px;
    position: relative;
    &::after {
      background-size: contain;
      left: -34px;
      bottom: 0px;
      width: 24px;
      height: 24px;
      content: "";
      position: absolute;
      background-image: url(../../assets/logos/svg/bold/volume-high.svg);
      background-position: center;
    }
    &__range {
      cursor: pointer;
      width: 90px;
      height: 5px;
      -webkit-appearance: none;
      background: $gray;
      outline: none;
      border-radius: 15px;
      overflow: hidden;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 11px;
        height: 7px;
        border-radius: 25%;
        background: $pure-white;
        cursor: pointer;
        box-shadow: -407px 0 0 400px $pure-white;
      }
    }
  }

  .tracksBtns {
    display: flex;
  }

  .previousBtn {
    @include btn-style("../../assets/logos/svg/bold/previous.svg");
  }

  .nextBtn {
    @include btn-style("../../assets/logos/svg/bold/next.svg");
  }

  .playBtn {
    &--playIcon {
      margin: auto 12px;
      cursor: pointer;
      display: block;
      border-style: none;
      border-radius: 50%;
      background-color: $dark5;
      width: 50px;
      height: 50px;
      background-image: url(../../assets/logos/svg/bold/pause.svg);
      background-position: center;
      background-repeat: no-repeat;
      padding: 10px 12px;
    }
    &__input {
    }
    &__input:checked + .playBtn--playIcon {
      background-image: url(../../assets/logos/svg/bold/playIcon.svg);
    }
  }

  .options {
    margin: auto 80px auto 0px;
    display: flex;
    &__like {
      margin-left: 20px;
    }
  }

  .like {
    &__btn {
      display: block;
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 24px;
      height: 24px;
      background-image: url(../../assets/logos/svg/bold/heart.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
    &__input {
      display: none;
    }
    &__input:checked + .like__btn {
      background-image: url(../../assets/logos/svg/bold/orangeHeart.svg);
    }
  }
  .option {
    padding-top: 5px;
    &__btn {
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 24px;
      height: 24px;
      background-image: url(../../assets/logos/svg/bold/3dot.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .audio__player-progress-container {
    width: 100%;
  }

  audio::-webkit-media-controls-panel {
    background: none;
    color: red;
    border-style: none;
  }

  .audio__player-progress-wrap {
    margin-top: 10px;
  }

  .audio__player-play,
  .audio__player-time {
    display: none;
  }

  .audio__player-progress-point {
    box-shadow: none !important;
  }
}

@media screen and (max-width: 1200px) {
  .musicNav {
    padding-right: 0px;
    &__musicDetails {
      margin: 12px 30px 12px 30px;
    }
    .musicDetails {
      width: 10%;
    }

    .musicOperations {
      width: 90%;
      display: flex;
      justify-content: center;
      &__duration {
        margin: auto 60px auto 0px;
      }
    }

    .playBtn {
      &__--playIcon {
        margin: auto 12px auto 0px;
      }
    }

    .options {
      margin: auto 40px auto 0px;
    }
    .volume {
      &__range {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .musicNav {
    bottom: 64px;
    height: 55px;
    flex-direction: column;
    .tracksBtns,
    .options,
    .volume,
    .musicDetails {
      display: none;
    }
    .musicOperations {
      width: 100%;
      &__duration {
        margin: auto 0px;
      }
    }

    .duration {
      &__totalTime {
        display: none;
      }
      &__remainTime {
        display: none;
      }
    }

    &__musicOperations {
      margin: 0px;
    }
    .audio__player-progress-wrap {
      margin-top: 0px;
      border-radius: 0px;
    }
    .audio__player-progress-point {
      display: none;
    }

    .music-mobile-details {
      border-bottom: 0.1px solid $gray;
      display: flex;
      margin: auto 0px;
      .details {
        width: 100%;
        display: flex;
        justify-content: start;
        vertical-align: middle;
      }
      .figure {
        margin: auto 12px;
        &__img {
          width: 35px;
          height: 35px;
          padding: auto 0px;
          vertical-align: middle;
        }
      }
      .operations {
        display: flex;
      }
    }
    .playBtn {
      &--playIcon {
        width: 30px;
        height: 30px;
      }
    }

    .titles {
      &--h10 {
        line-height: 50px;
      }
      &--sub {
        line-height: 50px;
      }
    }
  }
}

// animations

.scale-in-ver-bottom {
  -webkit-animation: scale-in-ver-bottom 0.5s ease both;
  animation: scale-in-ver-bottom 0.5s ease both;
}
@-webkit-keyframes scale-in-ver-bottom {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
}
@keyframes scale-in-ver-bottom {
  0% {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    opacity: 1;
  }
}

////////////////////////
</style>
