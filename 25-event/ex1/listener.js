const eventEmitter = require('./publisher');

function sayHi() {
    console.log("Hi :) ");
}

function printUserInfo(NAME , LAST_NAME , AGE) {
    console.log('name:', NAME + ",",'lastname: '+ LAST_NAME +",", 'age:',AGE);
} 

function printUserFullname(NAME , LAST_NAME , AGE) {
    console.log('Full name is ' + NAME + " "+ LAST_NAME);
}

function printUserAge(NAME , LAST_NAME , AGE) {
    console.log('Age is ' + AGE);
}

eventEmitter.once('userInfo', sayHi);
eventEmitter.on('userInfo', printUserInfo);
eventEmitter.on('userInfo', printUserFullname);
eventEmitter.on('userInfo', printUserAge);