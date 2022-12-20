const playlistController = require("./controllers/playlist.controller");
const createPlaylistValidation = require("./middlewares/createPlaylistValidation");
const {fetchQueryStringFromURL} = require('../../middlewares/');

const routes = [
    {
        url:'',
        method:"GET",
        handler:playlistController.getPlaylist,
        middlewares:[fetchQueryStringFromURL]
      },
      {
      
        url:'create',
        method:"POST",
        handler:playlistController.createPlaylist,
        middlewares:[createPlaylistValidation]
      }
 
];

module.exports = routes;





