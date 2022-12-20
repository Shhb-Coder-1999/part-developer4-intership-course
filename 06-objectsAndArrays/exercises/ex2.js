const person1 = {
    firstName: 'shahab',
    lastName: 'Doe',
    favcolor : 'red',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        adasasd: {
          ssad: 'fsdsd'
        }
    }
};

const person2 = {
    firstName: 'ali',
    lastName: 'Doe',
    weight : '64kg',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'C',
        country: 'US',
        ringNum : '213213',
    }
};

const DeepCopy = function(obj1 , obj2){
    obj1 = Object.assign(obj1,JSON.parse(JSON.stringify(obj2)))
}

DeepCopy(person1 , person2)
console.log(person1);
console.log(person2);



