const config = require('../../../config');
const PlaylistRepository = require('../repositories/playlist.repository');
const playlistRepository = new PlaylistRepository();
const path = require('path');

async function createPlaylist(req,res,queryParams){
    
        const playlist = await playlistRepository.create(req.fields,Object.keys(req.files).length !== 0?req.files:
                {
                        cover:{
                                filepath:config.storage.root+path.sep+'default.png'
                        }
                },req.auth.id);
        res.response(JSON.stringify(playlist[0]));
    

}
async function addToPlaylist(req,res,queryParams){
        const playlist = await playlistRepository.addToPlaylist(req.params.songs,queryParams[0]);
        res.response(JSON.stringify({
                message :"added successfully"
        }));
}
async function getPlaylist(req,res,queryParams){

        let  playlist;
        if (queryParams[0]){

            playlist = await playlistRepository.fetch(queryParams[0]);
            res.response(JSON.stringify(playlist[0]));
            return;
        }
        playlist = await playlistRepository.fetchAll(req.auth.id);
        res.response(JSON.stringify(playlist));

}

async function deletePlaylist(req,res,queryParams){
        let result = await playlistRepository.delete(queryParams[0]);
        result = {
            message : "deleted successfuly"
        };
        res.response(JSON.stringify(result));
}

async function editPlaylist(req,res,queryParams){
        let result = await playlistRepository.update(req.fields,Object.keys(req.files).length !== 0?req.files:
                {
                        cover:{
                                filepath:config.storage.root+path.sep+'default.png'
                        }
                },queryParams[0]);
        res.response(JSON.stringify(result[0]));
}
async function songsOfPlaylist(req,res,queryParams){
        let result = await playlistRepository.songs(queryParams[0],req.auth.id);
        res.response(JSON.stringify(result));
}
async function deleteSongOfPlaylist(req,res,queryParams){
        let result = await playlistRepository.deleteMusicFrom(queryParams[0],queryParams[1]);
        result = {
            message : "deleted successfuly"
        };
        res.response(JSON.stringify(result));
}
module.exports = {
    deletePlaylist,
    createPlaylist,
    addToPlaylist,
    getPlaylist,
    songsOfPlaylist,
    deleteSongOfPlaylist,
    editPlaylist
}