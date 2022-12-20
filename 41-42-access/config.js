module.exports = {
    server: {
        port: process.env.PORT ?? 8000,
        hostname: process.env.HOST ?? "127.0.0.1",
        eventName: "newReq",
    },
    Redis:{
        Client:{
            url:'redis://localhost:6379',
            password:'09154830087ra'
        },
        selectDB:5
    },
    privateKey:'myprivatekey'
}