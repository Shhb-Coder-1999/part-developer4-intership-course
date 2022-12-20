const jwt = require('jsonwebtoken');

function createCookie(data,expiration=300000) {
    let exp_Time = new Date(Date.now() + expiration).toUTCString();
    const jwtSecretKey = 'thesecondprivatekey'

    const token = jwt.sign(data, jwtSecretKey);
  
    const setCookie = `token=${token}; Expires=${exp_Time}; Path=/; Domain=loaclhost`;
    return setCookie;
}

function setCookie(serverResponse,cookie){
    serverResponse.setHeader('Set-Cookie',cookie)
    return serverResponse;
}
function getSign(cookie){
    return cookie.split(';')[0].split('.')[2];
}
function getToken(cookie){
    return cookie.split(';')[0].split('=')[1];
}
module.exports = {createCookie,setCookie,getSign,getToken};