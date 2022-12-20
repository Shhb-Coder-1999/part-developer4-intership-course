export default {
  getMusic(defaultState) {
    return defaultState.music;
  },

  getPlayedMusic(defaultState) {
    return defaultState.playedMusic;
  },
  getPopularMusics(defaultState) {
    return defaultState.popularMusics;
  },
  getPlayedHistory(defaultState) {
    return defaultState.playedHistory;
  },

  getSimilarMusics(defaultState) {
    return defaultState.similarMusics;
  },
  getSearchedResults(defaultState) {
    return defaultState.searchedResults;
  },
};
