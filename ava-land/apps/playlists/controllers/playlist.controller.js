const PlaylistRepository = require('../repositories/playlist.repository');
const playlistRepository = new PlaylistRepository();

async function createPlaylist(req,res){
    
    try {
        
        const playlist = await playlistRepository.create(req.fields,req.files);
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(playlist));

    } catch (error) {
        res.writeHead(500,{'Content-type':'application/json'});
        res.end("something went wrong :"+error.message);
    }
    

}

async function getPlaylist(req,res){

    try {
        let  playlist;
        if (req.querystring?.id){
            playlist = await playlistRepository.fetch(req.querystring.id);
        }
        else{
            playlist = await playlistRepository.fetchAll();

        }
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(playlist));

    } catch (error) {
        res.writeHead(500,{'Content-type':'application/json'});
        res.end("something went wrong :"+error.message);
    }

}


module.exports = {
    createPlaylist,
    getPlaylist
}