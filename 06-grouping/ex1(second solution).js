let users = require('./users')


const sortedusers = {
    'child':{
    },
    'young':{
    },
    'adult':{
    }
}



sortedusers.child.thin = (users.filter(user => {
    return (user.age <16 && user.weight <35 );
  }))

sortedusers.child.fit= (users.filter(user => {
    return (user.age <16 && (user.weight >= 35 && user.weight <= 45));
  }))
  
sortedusers.child.fat= (users.filter(user => {
    return (user.age <16 && user.weight > 45);
  }))
/////////////////////////////////////////////////////////////////
  sortedusers.young.thin= (users.filter(user => {
    return ((user.age >=16  && user.age <30) && user.weight <55);
  }))

sortedusers.young.fit = (users.filter(user => {
    return ((user.age >=16  && user.age <30) && (user.weight >= 55 && user.weight < 80));
  }))
  
sortedusers.young.fat= (users.filter(user => {
    return ((user.age >=16  && user.age <30) && user.weight > 80);
  }))  

/////////////////////////////////////////////////////////////////
sortedusers.adult.thin= (users.filter(user => {
    return (user.weight <65 && user.age >=30);
  }))

sortedusers.adult.fit= (users.filter(user => {
    return ((user.weight >= 65 && user.weight <= 85) && user.age <=30);
  }))
  
sortedusers.adult.fat= (users.filter(user => {
    return (user.weight > 80 && user.age >=30);
  }))  


console.log(sortedusers.child)
console.log(sortedusers.young)
console.log(sortedusers.adult)





