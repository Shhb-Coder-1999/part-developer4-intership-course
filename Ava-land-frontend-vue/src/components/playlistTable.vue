<template>
  <div class="playlistTable main__playlistTable">
    <table class="table playlistTable__table" cellspacing="0">
      <colgroup class="colgroup table__colgroup">
        <col class="colgroup--10" style="width: 6%" />
        <col class="colgroup--30" style="width: 28%" />
        <col class="colgroup--30" style="width: 28%" />
        <col class="colgroup--30" style="width: 28%" />
        <col class="colgroup--5" style="width: 5%" />
        <col class="colgroup--5" style="width: 4%" />
        <col class="colgroup--5" style="width: 4%" />
      </colgroup>

      <thead class="thead table__thead">
        <tr class="tHeader thead__tHeader">
          <th class="tHeader__hash"><span class="sort"></span>#</th>
          <th class="tHeader__title">عنوان</th>
          <th class="tHeader__album">آلبوم</th>
          <th class="tHeader__releaseTime">تاریخ انتشار</th>
          <th class="tHeader__duration"></th>
          <th class="tHeader__like"></th>
          <th class="tHeader__option"></th>
        </tr>
      </thead>

      <tbody class="tbody table__tbody">
        <tr class="tr tbody__tr" v-for="(track, index) of props.playlist" :key="track.id">
          <td class="tr__num">
            <equalizerSvg v-if="track.id == playedMusic.id" />
            <span v-else>{{ index + 1 }}</span>
          </td>
          <td class="title tr__title">
            <div
              class="img title__img"
              :style="{
                backgroundImage: 'url(' + track.img + ')',
              }"
              @click="showPlayBtn = true"
              @click.once="changeNavMusic(track)"
            >
              <input
                class="img__input"
                type="checkbox"
                name="playIcon"
                :id="`playIntro${track.id}`"
              />
              <label
                :for="`playIntro${track.id}`"
                class="img--playIcon"
                v-if="showPlayBtn"
              ></label>
            </div>
            <div class="details title__details" @click="gotoMusicView(track.id)">
              <span class="details--h10">{{ track.name }}</span
              ><br />
              <span class="details--sub">{{ track.artist }}</span>
            </div>
          </td>
          <td class="tr__album">
            <span>{{ track.album }}</span>
          </td>
          <td class="tr__releaseTime">
            <span>{{ track.releaseTime }}</span>
          </td>
          <td class="tr__duration">
            <span>{{ track.duration }}</span>
          </td>
          <td class="like tr__like">
            <input
              class="like__input"
              type="checkbox"
              name="like-heart"
              :id="`heart${track.id}`"
              :checked="track.like"
            />
            <label
              :for="`heart${track.id}`"
              class="like__btn"
              @click="likeMusic(track.id)"
            ></label>
          </td>
          <td class="option tr__option">
            <dropDown :options="options" :song="track" position="right" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import dropDown from "./appDropdown.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import equalizerSvg from "../components/svg/equalizerSvg.vue";

const router = useRouter();
const store = useStore();

const playedMusic = computed(() => store.getters.getPlayedMusic);
const showPlayBtn = ref(false);

const changeNavMusic = (music) => {
  store.dispatch("playMusic", music);
};

const gotoMusicView = (songId) => {
  router.push(`/music/${Number(songId)}`);
};

const props = defineProps({
  playlist: Array,
});

const likeMusic = (id) => {
  store.dispatch("likeMusic", id);
};

const options = ref([
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
.playlistTable {
  margin: 20px 40px 0px 130px;
  width: 100%;

  a {
    text-decoration: none;
    color: $pure-white;
  }

  .tbody {
    position: relative;
    &:before {
      position: absolute;
      content: "";
      background-color: #242533;
      height: 0.5px;
      width: 100%;
    }
  }

  .table {
    border-spacing: 1.5em;
    &__thead {
      border-bottom: 2px solid black;
      height: 30px;
      text-align: right;
      padding: 4px 8px;
      color: $gray;
    }
  }

  .tr {
    color: $pure-white;
    &__title {
      display: flex;
    }
    &__duration {
      &--selected {
        color: $orange;
      }
    }
  }

  .title {
    &__img {
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }

  .details {
    cursor: pointer;
    padding: 0px 10px;
    &--h10 {
      font-size: 14px;
      font-weight: 600;
    }
    &--sub {
      font-size: 10px;
      font-weight: 600;
      color: $gray;
    }
  }

  .like {
    text-align: center;
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
    &__selectedBtn {
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 24px;
      height: 24px;
      background-image: url(../assets/logos/main-icons/linear/orangeHeart.png);
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

  .option {
    padding-top: 5px;
    &__btn {
      background: transparent;
      cursor: pointer;
      border-style: none;
      width: 24px;
      height: 24px;
      background-image: url(../assets/logos/svg/bold/3dot.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .img {
    width: 50px;
    height: 50px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &--playIcon {
      cursor: pointer;
      display: block;
      border-style: none;
      border-radius: 50%;
      background-color: #ffa928;
      width: 32px;
      height: 32px;
      background-image: url(../assets/logos/svg/bold/pause.svg);
      background-position: center;
      background-repeat: no-repeat;
      padding: 10px;
    }
    &__input {
      display: none;
    }
    &__input:checked + .img--playIcon {
      background-image: url(../assets/logos/svg/bold/playIcon.svg);
    }
  }
}

@media screen and (max-width: 768px) {
  .playlistTable {
    margin: 0px 7px;
    width: unset;

    .table {
      width: 100%;
    }
    .tHeader,
    .colgroup,
    .thead {
      display: none;
    }
    .tr {
      &__album,
      &__releaseTime,
      &__duration,
      &__num {
        display: none;
      }
    }
  }
}
</style>
