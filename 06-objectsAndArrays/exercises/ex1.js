function swapKeysAndValues(obj) {
    const swapped = Object.entries(obj).map(
      ([key, value]) => [value, key]
    );
    return Object.fromEntries(swapped);
  }

  
  console.log( swapKeysAndValues({shafie : 'lastname', shahab: 'name'})); // { lastname: 'shafie', name: 'shahab' }
  console.log( swapKeysAndValues({type:"Fiat", model:"500", color:"white"})); // { '500': 'model', Fiat: 'type', white: 'color' }
