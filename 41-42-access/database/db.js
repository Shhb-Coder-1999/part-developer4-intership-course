

const roles = {
    admin:['GET/users'],
    user:[]
}

const users = [
    {
        // this user should be register on selected cache sign:token
        user:'admin',
        password:'5PlrXG9+jBAW/Y8gMFtp4bVhKGNozTw3SR7/OVkvO+4=',//"password" : "admin"
        time:1662706022230,
        sign:'o7u2_9ldtVZvlT62K4tBS1NCqUUKKg7wzY1RkFv6J6I', // token :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJ0aW1lIjoxNjYyNzA2MDIyMjMwLCJpYXQiOjE2NjI3MDYwMjJ9.o7u2_9ldtVZvlT62K4tBS1NCqUUKKg7wzY1RkFv6J6I
        role:roles.admin
    },
]
module.exports = users;