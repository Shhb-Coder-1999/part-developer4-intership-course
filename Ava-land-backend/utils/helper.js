function getMimeNameFromExt(ext) {
    let mimeNames = {
    '.css': 'text/css',
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.ogg': 'application/ogg',
    '.ogv': 'video/ogg',
    '.oga': 'audio/ogg',
    '.txt': 'text/plain',
    '.wav': 'audio/x-wav',
    '.webm': 'video/webm',
    '.jpeg':'image/jpeg',
    '.jpg':'image/jpg',
    '.png':'image/png',
    
    };
    let result = mimeNames[ext.toLowerCase()];
    if (result == null)
    result = 'application/octet-stream';
    return result;
}

function readRangeHeader(range){
    let ranges = range.split(/bytes=([0-9]*)-([0-9]*)/);
    return [ranges[1],ranges[2]];
}

module.exports = {
    getMimeNameFromExt,
    readRangeHeader

}
