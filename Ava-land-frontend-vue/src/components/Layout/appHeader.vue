<template>
  <div class="header">
    <header class="header container__header">
      <nav class="nav header__nav" dir="rtl">
        <div class="searchbox nav__searchbox">
          <figure class="searchfigurelogo searchbox__searchfigurelogo">
            <img
              class="searchfigurelogo__searchlogo"
              src="../../assets/logos/svg/linear/search-normal.svg"
              alt="search-normal"
            />
          </figure>
          <div class="searchbox__area">
            <input
              type="text"
              name=""
              placeholder="جستجو..."
              id="searchbox-input"
              v-model="searchInput"
              @keyup="getResult()"
              class="searchbox__searchinput"
            />
            <div class="searchbox__results" v-if="searchInput">
              <ul
                class="searchbox__result-list"
                v-if="
                  Array.isArray(searchedResults) && searchedResults.length != 0
                "
              >
                <div v-for="song in searchedResults" :key="song.id">
                  <li
                    class="searchbox__result-item"
                    @click="gotoMusicView(song['_source'].id)"
                  >
                    <img
                      class="searchbox__result-item-img"
                      :src="song['_source'].img"
                      alt=""
                    />
                    <span class="searchbox__result-name">{{
                      song["_source"].name
                    }}</span>
                  </li>
                  <hr class="searchbox__result-hr" />
                </div>
              </ul>

              <div
                class="searchbox__result-list"
                v-else-if="
                  Array.isArray(searchedResults) && searchedResults.length == 0
                "
              >
                <span class="searchbox__result-item">
                  نتیجه ای یافت نشد !
                </span>
              </div>

              <div v-else class="searchbox__result-list">
                <span class="searchbox__result-item"> در حال جست و جو ...</span>
              </div>
            </div>
          </div>

          <hr class="hr searchbox__hr" />
          <div class="filterparent searchbox__filterparent">
            <button class="filter filterdesktop filterparent__filter">
              فیلتر
            </button>
            <button class="filter filtermobile filterparent__filter"></button>
          </div>
        </div>

        <div class="profilecontainer nav__profilecontainer">
          <div
            class="optionBtn profilecontainer__optionBtn"
            v-if="!store.state.user.isLogin"
          >
            <div
              class="history optionBtn__history"
              :class="{
                history: true,
                optionBtn__history: true,
                'history--active': leftSidebarToggle,
              }"
              @click="(leftSidebarToggle = true), gotoSignUp()"
            >
              <span>ثبت نام</span>
            </div>
            <div
              :class="{
                popSongs: true,
                optionBtn__history: true,
                'popSongs--active': !leftSidebarToggle,
              }"
              @click="(leftSidebarToggle = false), gotoLogin()"
            >
              <span>ورود</span>
            </div>
          </div>

          <div
            class="profile profilecontainer__profile"
            v-if="store.state.user.isLogin"
          >
            <a class="number profile__number">{{
              store.state.user.user.user.split("@")[0]
            }}</a>
            <dropDown
              class="dropDown dropDown__profile"
              :options="options"
              position="right"
              :exit="true"
              icon="bottomArrow"
            />
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import dropDown from "../appDropdown.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();

const searchInput = ref("");
const delay = ref(null);

const gotoMusicView = (id) => {
  router.push(`/music/${id}`);
};

const searchedResults = computed(() => store.getters.getSearchedResults);

const getResult = () => {
  if (delay.value) {
    clearTimeout(delay.value);
    delay.value = null;
  }
  delay.value = setTimeout(function () {
    store.dispatch("getSearchedResults", searchInput.value);
  }, 1500);
};

const options = ref([
  {
    title: "خروج",
    iconSrc: new URL(
      "../../assets/logos/svg/bold/editMusic.svg",
      import.meta.url
    ),
    alt: "trashIcon",
    flag: true,
    model: "showEditSongModal",
  },
]);

const gotoLogin = () => {
  router.push("/Auth/login");
};

const gotoSignUp = () => {
  router.push("/Auth/signup/stage1");
};

const leftSidebarToggle = ref(false);
</script>

<style lang="scss" scoped>
.header {
  .nav {
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0);
  }
  .searchfigurelogo {
    margin: 0;
    display: flex;
    align-items: center;
  }
  .searchbox {
    display: flex;
    position: relative;
    align-items: center;
    width: 73%;
    height: 100%;
    background-color: $headerSearchBar;
    border-radius: 16px;
    padding-right: 20px;
    padding-left: 10px;
    &__searchinput {
      background-color: rgba($color: #000000, $alpha: 0);
      color: white;
      font-size: 16px;
      border: 0px;
      width: 100%;
      position: relative;
    }

    &__result-list {
      padding-inline-start: 0px;
      width: 100%;
      background: $dark8;
      list-style-type: none;
      border-radius: 0px 0px 16px 16px;
      margin-top: 3px;
    }

    &__area {
      position: relative;
      width: 100%;
    }
    &__results {
      position: absolute;
      width: 100%;
      z-index: 3;
    }
    &__result-item {
      padding: 5px 0px;
      margin-right: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &__result-item-img {
      width: 40px;
      height: 40px;
      margin: 0px 10px;
    }
    &__result-name,
    &__result-artist {
      color: $pure-white;
      margin: 0px 5px;
    }
    &__result-hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.75),
        rgba(0, 0, 0, 0)
      );
    }
    &__searchinput::placeholder {
      color: white;
    }
    .searchfigurelogo {
      margin-left: 10px;
    }
  }
  .btns {
    display: flex;
    input {
      display: none;
    }
    input:checked + .avaz {
      background-color: $orange;
    }
    input:checked + .sonati {
      background-color: $orange;
    }
    input:checked + .irani {
      background-color: $orange;
    }
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-size: 14px;
    width: 64px;
    height: 32px;
    border: 0px;
    border-radius: 16px;
    background-color: $searchBarBnts;
    margin-left: 4px;
    margin-right: 4px;
  }

  .hr {
    margin: 0;
    width: 0px;
    height: 24px;
  }
  .filterparent {
    position: relative;
  }
  .filtermobile {
    display: none;
  }
  .filter {
    background-color: rgba(#000000, 0);
    color: white;
    font-size: 14px;
    width: 64px;
    height: 32px;
    border: 0px;
    padding-right: 33px;
    cursor: pointer;
  }
  .filter::before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 3px;
    left: 36px;
    background-image: url("../../assets/logos/svg/linear/setting-4.svg");
  }

  .profilecontainer {
    display: flex;
    flex-direction: row-reverse;
    width: 26%;
  }
  .profile {
    display: flex;
    align-items: center;

    &__number {
      color: $orange;
      font-weight: 600;
      font-size: 16px;
    }

    .profilefigure {
      margin: 0;
      margin-right: 4px;
    }
  }

  .optionBtn {
    line-height: 45px;
    text-align: center;
    display: flex;
    width: 60%;
    background: rgba(70, 70, 70, 0.4);
    border-radius: 16px;
  }
}

.dropDown {
  padding: 0px 10px;
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

@media screen and (max-width: 768px) {
  .header {
    .btns {
      display: none;
    }
    .profilecontainer {
      display: none;
    }
    .searchbox {
      width: 100%;
      &__searchinput {
        width: 100%;
      }

      &__btns {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    .searchbox {
      width: 100%;
    }
    .filtermobile {
      display: block;
    }
    .filterdesktop {
      display: none;
    }
  }
}
</style>
