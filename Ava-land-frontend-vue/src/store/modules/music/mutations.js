export default {
  upload_Music(defaultState) {
    Object.assign(defaultState.music, defaultState.editedMusic);
    console.log("upload_Music");
  },
  edit_Music(defaultState, musicData) {
    Object.assign(defaultState.music, musicData);
  },
  delete_Music(defaultState) {
    defaultState.music = {};
  },
  change_Selected_Music(defaultState, song) {
    defaultState.selectedMusics = [song];
  },

  reset_selectedMusics(defaultState) {
    defaultState.selectedMusics = [defaultState.selectedMusics[0]];
  },

  add_To_Selected_Music(defaultState, song) {
    console.log(defaultState.selectedMusics);
    defaultState.selectedMusics.push(song);
    console.log(defaultState.selectedMusics);
  },

  set_Music_File(defaultState, musicFile) {
    Object.assign(defaultState.music, musicFile);
    console.log("defaultState.music:", defaultState.music);
  },

  get_Music(defaultState, music) {
    defaultState.music = music;
    defaultState.selectedMusics = [music];
    console.log("defaultState.music", defaultState.selectedMusics);
  },
  play_Music(defaultState, music) {
    defaultState.playedMusic = { flag: false, ...music };
  },

  set_PlayedMusic(defaultState) {
    defaultState.isPlay = !defaultState.isPlay;
    Object.assign(defaultState.playedMusic, defaultState.music);
  },
  set_found_songs(defaultState, foundSongs) {
    defaultState.searchedMusics = foundSongs;
  },

  set_playOn_time(defaultState, playOnTime) {
    defaultState.playOnTime = playOnTime;
  },

  set_prev_music(defaultState, prevMusic) {
    defaultState.isPlay = true;
    defaultState.playedMusic = prevMusic;
  },

  set_popular_musics(defaultState, popularMusics) {
    defaultState.popularMusics = popularMusics;
  },
  set_played_history(defaultState, playedHistory) {
    defaultState.playedHistory = playedHistory;
  },
  set_similar_musics(defaultState, similarMusics) {
    defaultState.similarMusics = similarMusics;
  },
  clear_searched_results(defaultState) {
    defaultState.searchedResults = null;
  },
  set_searched_results(defaultState, searchedResults) {
    defaultState.searchedResults = searchedResults;
  },
};
