import { createStore } from "vuex";
import userModule from "./modules/user/index";
import musicModule from "./modules/music/index";
import playlistModule from "./modules/playlist/index";

const store = createStore({
  state: {
    popularSong: [
      {
        id: 1,
        name: "باطل",
        artist: "شادمهر عقیلی",
        coverPath: new URL("../assets/images/batelCover.png", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: "عوض نمیشی",
        artist: "شادمهر عقیلی",
        id: 2,
        coverPath: new URL("../assets/images/avazNemishi.svg", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: "خواب خوش",
        artist: "شادمهر عقیلی",
        id: 3,
        coverPath: new URL("../assets/images/khabeKosh.svg", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: " حس خوبیه",
        artist: "شادمهر عقیلی",
        id: 4,
        coverPath: new URL("../assets/images/heseKhobiye.svg", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: " معروف",
        artist: "شادمهر عقیلی",
        id: 5,
        coverPath: new URL("../assets/images/marof.svg", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",

        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: "دسته من نیست ",
        artist: "شادمهر عقیلی",
        id: 6,
        coverPath: new URL(
          "../assets/images/dasteManNist.svg",
          import.meta.url
        ),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
      {
        name: " تو بی من",
        artist: "شادمهر عقیلی",
        id: 7,
        coverPath: new URL("../assets/images/toBiMan.svg", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        releaseTime: "۲۵ روز پیش",
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
    ],

    playlists: [
      {
        name: "سنتی ایرانی",
        id: 1,
        trackAmount: 22,
        duration: "۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه ",
        tracks: [],
        coverPath: new URL("../assets/images/sonati.svg", import.meta.url),
      },
      {
        name: "لیست پخش ۱",
        id: 2,
        trackAmount: 8,
        duration: "۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه ",
        tracks: [],
        coverPath: new URL("../assets/images/list1.svg", import.meta.url),
      },
      {
        name: "غمگین",
        id: 3,
        trackAmount: 32,
        duration: "۶ ساعت و ۴۰ دقیقه و ۲۱ ثانیه ",
        tracks: [],
        coverPath: new URL("../assets/images/ghamgin.svg", import.meta.url),
      },
    ],

    selectedSong: [
      {
        id: 1,
        name: "باطل",
        artist: "شادمهر عقیلی",
        coverPath: new URL("../assets/images/batelCover.png", import.meta.url),
        duration: "۰۳:۴۴",
        album: "تک آهنگ",
        like: false,
        playState: false,
        lyric: [
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
          ],
          [
            "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
          ],
        ],
      },
    ],

    playedMusic: {
      id: 1,
      name: "باطل",
      artist: "شادمهر عقیلی",
      coverPath: new URL("../assets/images/batelCover.png", import.meta.url),
      duration: "۰۳:۴۴",
      album: "تک آهنگ",
      like: false,
      playState: false,
      lyric: [
        [
          "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
          "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دریا دلش تنگه ببینه ما دو تا رو با هم",
        ],
        [
          "اون که با خودخواهیاش این عشقو باطل کرد بهم بگو تو بودی یا من اون ک پامونو رفیق موج و ساحل کرد خودت بگو تو بودی یا من تو کجایی که الآن دری دلش تنگه ببینه ما دو تا رو با هم",
        ],
      ],
    },

    modalState: {
      showPlaylistModal: false,
      showDeleteModal: false,
      showEditSongModal: false,
    },

    snackbar: {
      message: "",
      color: null,
      show: false,
      timeout: 2000,
    },
  },
  getters: {
    getSnackbarInfo(state) {
      return state.snackbar;
    },
  },
  mutations: {
    setSnackbar(state, snackbar) {
      state.snackbar = snackbar;
    },

    toggle_Model(state, model) {
      state.modalState[model] = !state.modalState[model];
    },

    change_Selected_Song(state, song) {
      state.selectedSong = [song];
    },

    delete_Song(state) {
      const song = state.selectedSong[0];
      state.popularSong.forEach((Song) => {
        if (Song.id == song.id) {
          state.popularSong.splice(state.popularSong.indexOf(Song), 1);
          state.selectedSong = {};
        }
      });
    },

    delete_Song_From_Playlist(state, playlistId) {
      const song = state.selectedSong[0];
      state.playlists.forEach((playlist, index) => {
        if (playlist.id == playlistId) {
          playlist.tracks.forEach((track) => {
            if (track.id == song.id)
              state.playlists[index].tracks.splice(
                state.playlists[index].tracks.indexOf(track),
                1
              );
          });
        }
      });
    },

    create_Playlist(state, playlistName) {
      const newPlaylist = {
        name: playlistName,
        id: state.playlists.length + 1,
        trackAmount: 1,
        tracks: JSON.parse(JSON.stringify(state.selectedSong)),
        coverPath: new URL("../assets/images/sonati.svg", import.meta.url),
      };
      state.selectedSong = [];
      state.playlists.push(newPlaylist);
    },

    add_To_Playlist(state, playlistId) {
      state.playlists.forEach((playlist) => {
        if (playlist.id == playlistId) {
          playlist.tracks = playlist.tracks.concat(
            JSON.parse(JSON.stringify(state.selectedSong))
          );
        }
      });
    },

    add_To_SelectedSong(state, song) {
      state.selectedSong.push(song);
    },

    edit_Song_Details(state, song) {
      state.popularSong.forEach((Song, index) => {
        if (Song.id == song.id) {
          state.popularSong[index] = song;
        }
      });
    },
  },
  actions: {
    setSnackbar({ commit }, snackbar) {
      commit("setSnackbar", snackbar);
    },

    toggleModel({ commit }, model) {
      commit("toggle_Model", model);
    },
    // changeSelectedSong({ commit }, song) {
    //   commit("change_Selected_Song", song);
    // },
    deleteSong({ commit }) {
      commit("delete_Song");
    },

    // createPlaylist({ commit }, playlistName) {
    //   commit("create_Playlist", playlistName);
    // },

    addToPlaylist({ commit }, playlistId) {
      commit("add_To_Playlist", playlistId);
    },

    addToSelectedSong({ commit }, song) {
      commit("add_To_SelectedSong", song);
    },

    deleteSongFromPlaylist({ commit }, playlistId) {
      commit("delete_Song_From_Playlist", playlistId);
    },

    editSongDetails({ commit }, song) {
      commit("edit_Song_Details", song);
    },
  },
  modules: {
    user: userModule,
    music: musicModule,
    playlist: playlistModule,
  },
});

export default store;
