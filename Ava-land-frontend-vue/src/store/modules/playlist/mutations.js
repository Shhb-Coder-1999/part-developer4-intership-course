export default {
  create_Playlist(defaultState, playlist) {
    defaultState.playlist = playlist;
    defaultState.playlist.push(playlist);
  },

  add_To_SongsList(defaultState, id) {
    defaultState.songsList == ""
      ? (defaultState.songsList = String(id))
      : (defaultState.songsList = defaultState.songsList.concat(",", id));
    console.log(defaultState.songsList);
  },

  get_Playlists(defaultState, playlists) {
    defaultState.playlists = playlists;
  },

  get_PlaylistInfo(defaultState, playlist) {
    console.log("get_PlaylistInfo", playlist);
    defaultState.playlist = playlist;
  },

  get_PlaylistsSongs(defaultState, playlistSongs) {
    console.log("get_PlaylistsSongs", playlistSongs);
    defaultState.playlistSongs = playlistSongs;
  },

  change_Selected_Playlist(defaultState, playlist) {
    defaultState.selectedPlaylist = playlist;
  },

  delete_Playlist(defaultState) {
    defaultState.playlists.forEach((playlist, index) => {
      if (playlist.id == defaultState.selectedPlaylist.id) {
        defaultState.playlists.splice(index, 1);
        defaultState.selectedPlaylist = {};
      }
    });
  },
};
