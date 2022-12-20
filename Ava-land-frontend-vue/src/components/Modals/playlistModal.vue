<template>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="store.state.modalState.showPlaylistModal"
        @click="toggleModel()"
      ></div>
    </transition>
    <transition name="pop" appear>
      <div
        class="modal"
        role="dialog"
        v-if="store.state.modalState.showPlaylistModal"
      >
        <div class="header">
          <div class="toggle">
            <div
              :class="{
                createPlaylist: true,
                active: active,
                deActive: !active,
              }"
              @click="
                active = !active;
                changeModel = !changeModel;
              "
            >
              ایجاد لیست پخش
            </div>

            <div
              :class="{
                choosePlaylist: true,
                active: !active,
                deActive: active,
              }"
              @click="
                active = !active;
                changeModel = !changeModel;
              "
            >
              انتخاب لیست پخش
            </div>
          </div>

          <div class="closeBtn">
            <button
              class="close"
              @click="
                (store.state.modalState.showPlaylistModal = false),
                  (playlistAdded = []),
                  (songAdded = []),
                  resetSelectedMusics()
              "
            ></button>
          </div>
        </div>
        <hr class="hr1" />
        <div class="main" v-if="changeModel">
          <h4 class="h4-1">نام لیست پخش</h4>

          <div class="inputSection">
            <div class="input">
              <input
                v-model="playlistName"
                class="textField"
                type="text"
                name=""
                id=""
              />
            </div>
            <div
              @click="
                createPlaylist(playlistName),
                  (store.state.modalState.showPlaylistModal = false)
              "
              class="btn"
            >
              ذخیره
            </div>
          </div>

          <div class="selectedSongSection">
            <div
              class="selectedSong selectedSongSection__selectedSong"
              v-for="song in store.state.music.selectedMusics"
              :key="song.id"
            >
              <img
                class="selectedSongImg selectedSong__selectedSongImg"
                :src="song.coverPath"
                alt=""
              />
              <div class="description">
                <span class="selectedSongName">{{ song.name }}</span>
                <br />
                <span class="selectedArtistName">{{ song.artist }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="main" v-if="!changeModel">
          <h4 class="h4-1">فیلتر لیست پخش ها</h4>

          <div class="inputSection">
            <div class="filterInput">
              <input
                v-model="playlistNameFilter"
                class="filterTextField"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>

        <hr class="hr1" />

        <div class="footer">
          <h4 class="h4-1" v-if="changeModel">آهنگ های مشابه</h4>
          <h4 class="h4-1" v-else>لیست های پخش</h4>

          <ul class="similarSongList" v-if="changeModel">
            <li
              class="similarSong"
              v-for="(song, index) in similarSongs"
              :key="index"
            >
              <div
                class="similarSongSection"
                v-show="!songAdded.includes(index)"
              >
                <div class="similarSong similarSongSection__similarSong">
                  <img
                    class="similarSongImg similarSong__similarSongImg"
                    :src="song.coverPath"
                    alt=""
                  />
                  <div class="similarSongDescription">
                    <span class="similarSongName">{{ song.name }}</span>
                    <br />
                    <span class="similarArtistName">{{ song.artist }} </span>
                  </div>
                </div>
              </div>
              <button
                @click="
                  songAdded.push(index),
                    addToSelectedSong(song),
                    addToSongsList(song)
                "
                class="addSimilarSong"
                v-show="!songAdded.includes(index)"
              >
                اضافه کردن به لیست پخش
              </button>
            </li>
          </ul>
          <ul class="playLists" v-else>
            <li
              class="playList"
              v-for="(playlist, index) in playlists"
              :key="index"
            >
              <div
                class="playListSection"
                v-show="!playlistAdded.includes(index)"
              >
                <div class="playList">
                  <img class="playListImg" :src="playlist.coverPath" alt="" />
                  <div class="playListDescription">
                    <span class="playListName">{{ playlist.name }}</span>
                    <br />
                    <span class="playListArtistName"
                      >{{ playlist.trackAmount }} آهنگ
                    </span>
                  </div>
                </div>
              </div>
              <button
                @click="addToPlaylist(playlist.id), playlistAdded.push(index)"
                v-show="!playlistAdded.includes(index)"
                class="addPlayList"
              >
                اضافه کردن به لیست پخش
              </button>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
const active = ref(true);
const store = useStore();

const route = useRoute();

let changeModel = ref(true);
let playlistName = ref("");
let playlistNameFilter = ref("");
let songAdded = ref([]);
let playlistAdded = ref([]);

const toggleModel = () => {
  store.dispatch("toggleModel", "showPlaylistModal");
};

const resetSelectedMusics = (prop) => {
  store.dispatch("resetSelectedMusics", prop);
};

const addToSelectedSong = (song) => {
  store.dispatch("addToSelectedSong", song);
};

const addToPlaylist = (playlistId) => {
  store.dispatch("addToPlaylist", playlistId);
};

const addToSongsList = (song) => {
  store.dispatch("addToSongsList", `${song.id}`);
  store.dispatch("addToSelectedMusic", song);
};

const createPlaylist = (playlist_Name) => {
  // store.dispatch("createPlaylist", playlist_Name);
  addToSongsList(store.state.music.selectedMusics[0]);
  store.dispatch("createPlaylist", {
    name: playlist_Name,
    songList: `${store.state.playlist.songsList}`,
  });

  playlistName.value = "";
};

const similarSongs = computed(() => {
  let tempArr = [];
  store.state.popularSong.forEach((Song) => {
    if (Song.id != route.params.id) tempArr.push(Song);
  });
  return tempArr;
});

const playlists = computed(() => {
  let filteredPlaylists = [];
  store.state.playlists.forEach((playlist) => {
    if (playlist.name.includes(playlistNameFilter.value))
      filteredPlaylists.push(playlist);
  });
  return filteredPlaylists;
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/animations/slide-out-bottom";
@import "../../assets/scss/animations/slide-in-bottom";
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  width: 500px;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: rgba(53, 53, 53);
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(17, 17, 17, 0.6);
  // backdrop-filter: blur(1px);
  opacity: 0.8;
}

/* ---------------------------------- */
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.4s linear;
// }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active {
  -webkit-animation: slide-in-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.pop-leave-active {
  // transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
  -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: slide-out-bottom 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

// .pop-enter,
// .pop-leave-to {
//   opacity: 0;
//   transform: scale(0.3) translateY(-50%);
// }

.toggle {
  padding: auto 0px;
  color: #ffffff;
  font-size: 12px;
  display: flex;
  width: 220px;
  height: 30px;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    #fc8f22;
}

.createPlaylist {
  cursor: pointer;
  text-align: center;
  width: 110px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  background: #fc8f22;
}

.choosePlaylist {
  cursor: pointer;
  text-align: center;
  width: 110px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px 0px 0px 10px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    #fc8f22;
}

.active {
  background: #fc8f22;
  transition: all 500ms;
}

.deActive {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    #fc8f22;
}

.header {
  display: flex;
  justify-content: space-between;
}

.close {
  background-image: url(../../assets/logos/svg/bold/close-circle.svg);
  background-color: transparent;
  background-size: contain;
  height: 24px;
  width: 24px;
  border-style: none;
  cursor: pointer;
}

.hr1 {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin: 1em 0 1em 0;
  padding: 0;
}

.h4-1 {
  text-align: start;
  margin-bottom: 15px;
}

.inputSection {
  display: flex;
  width: 100%;
  height: 40px;
  border-radius: 10px 10px 10px 10px;
}

.input {
  width: 75%;
  height: 40px;
  background: #464646;
  border-radius: 0px 10px 10px 0px;
}

.filterInput {
  width: 100%;
  height: 40px;
  background: #464646;
  border-radius: 10px;
}

.btn {
  color: #ffffff;
  width: 25%;
  height: 40px;
  background: #fc8f22;
  border-radius: 10px 0px 0px 10px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}

.textField {
  border-radius: 0px 10px 10px 0px;
  border-style: none;
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  background: #464646;
  color: #ffffff;
}

.filterTextField {
  border-radius: 10px 10px 10px 10px;
  border-style: none;
  width: 100%;
  height: 40px;
  padding: 0px 10px;
  background: #464646;
  color: #ffffff;
}

.textField:focus-visible {
  outline: none;
}

.selectedSongSection {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin: 20px 0px;
}

.selectedSong {
  display: flex;
  margin: 10px 0px;
}

.selectedSongImg {
  width: 50px;
  height: 50px;
}

.description {
  text-align: start;
  padding: 5px 10px;
  line-height: 20px;
}

.selectedSongName {
  font-size: 12px;
  color: #fc8f22;
}

.selectedArtistName {
  font-size: 10px;
}

.similarSongList {
  max-height: 300px;
  overflow: auto;
  border-radius: 10px;
}

.similarSongList::-webkit-scrollbar {
  display: none;
}
.similarSongSection {
  display: flex;
  justify-content: start;
  margin: 10px 0px;
}

.similarSong {
  display: flex;
}

.similarSongImg {
  width: 70px;
  height: 70px;
}

.similarSongName {
  font-size: 14px;
  color: #ffffff;
}

.similarArtistName {
  font-size: 12px;
  line-height: 10px;
}

.similarSong {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}

.similarSongList {
  padding-right: 0px;
  background-color: #3f3f3f;
  padding: 0px 8px;
}

.similarSongDescription {
  text-align: start;
  line-height: 20px;
  padding: 15px 10px;
}

.addSimilarSong {
  height: 40px;
  align-self: center;
  color: #fc8f22;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
}

.playLists {
  max-height: 270px;
  overflow: auto;
  border-radius: 10px;
  padding-right: 0px;
}

.playLists::-webkit-scrollbar {
  display: none;
}
.playListSection {
  display: flex;
  justify-content: start;
}

.playList {
  display: flex;
}

.playListImg {
  width: 70px;
  height: 70px;
}

.playListName {
  font-size: 14px;
  color: #ffffff;
}

.playListArtistName {
  font-size: 12px;
  line-height: 10px;
}

.playList {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  background-color: #3f3f3f;
  margin: 10px 0px;
  padding: 0px 10px;
  border-radius: 10px;
}

.playLists {
  padding-right: 0px;
  border-radius: 10px;
  padding: 0px 8px;
}

.playListDescription {
  text-align: start;
  line-height: 20px;
  padding: 15px 10px;
}

.addPlayList {
  height: 40px;
  align-self: center;
  color: #fc8f22;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .modal {
    width: 100%;
    top: unset;
    z-index: 1001;
    border-radius: 1rem 1rem 0 0;
    overflow: auto;
    background: #2f2f2f;
    height: 75vh;
    padding: 20px 20px;
    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
}

@media only screen and (max-width: 480px) {
  .modal {
    width: 100%;
    top: unset;
    z-index: 1001;
    border-radius: 1rem 1rem 0 0;
    overflow: auto;
    background: #2f2f2f;
    height: unset;
    padding: 20px 20px;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  }
}
</style>
