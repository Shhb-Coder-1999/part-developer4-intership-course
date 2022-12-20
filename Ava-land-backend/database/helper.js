function dollarSequence(arr) {
  let newArry = [];
  for (let index = 0; index < arr.length; index++) {
    newArry.push("$" + (index + 1));
  }
  return newArry;
}

function questionMarkSequence(arr) {
  let newArry = [];
  for (let index = 0; index < arr.length; index++) {
    newArry.push("?");
  }
  return newArry;
}


module.exports = { dollarSequence, questionMarkSequence };
