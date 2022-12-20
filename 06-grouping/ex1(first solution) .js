let users = require('./users')

let sortedusers = {
    'child':{
        'thin':[],
        'fit':[],
        'fat':[]
    },
    'young':{
        'thin':[],
        'fit':[],
        'fat':[]
    },
    'adult':{
        'thin':[],
        'fit':[],
        'fat':[]
    }
}

const Sort = function(user){
    if      (user.age <16 && user.weight <35 ) sortedusers.child.thin.push(user)
    else if (user.age <16 && (user.weight >= 35 && user.weight <= 45)) sortedusers.child.fit.push(user)
    else if (user.age <16 && user.weight > 45) sortedusers.child.fat.push(user)
    else if ((user.age >=16  && user.age <30) && user.weight <55 )  sortedusers.young.thin.push(user)
    else if ((user.age >=16  && user.age <30) && (user.weight >= 55 && user.weight < 80)) sortedusers.young.fit.push(user)
    else if ((user.age >=16  && user.age <30) && user.weight > 80 ) sortedusers.young.fat.push(user)
    else if (user.weight <65 && user.age >=30) sortedusers.adult.thin.push(user)
    else if ((user.weight >= 65 && user.weight <= 85) && user.age <=30) sortedusers.adult.fit.push(user)
    else if (user.weight > 80 && user.age >=30) sortedusers.adult.fat.push(user)
}

users.forEach(Sort);

console.log(sortedusers.child)
console.log(sortedusers.young)
console.log(sortedusers.adult)








