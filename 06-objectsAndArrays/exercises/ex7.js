const data = require('./data.js')


const findPath = (ob, key) => {
    const path = [];
    const keyExists = (obj) => {
      if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
        return false;
      }
      else if (obj.hasOwnProperty(key)) {
        return true;
      }
      else if (Array.isArray(obj)) {
        let parentKey = path.length ? path.pop() : "";
  
        for (let i = 0; i < obj.length; i++) {
          path.push(`${parentKey}[${i}]`);
          const result = keyExists(obj[i], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      else {
        for (const k in obj) {
          path.push(k);
          const result = keyExists(obj[k], key);
          if (result) {
            return result;
          }
          path.pop();
        }
      }
      return false;
    };
  
    keyExists(ob);
    
    return path.join(" ");
  }


const iterate = (obj) => {
    
    Object.keys(obj).forEach(key => {

    if (typeof obj[key] === 'object' && obj[key] !== null) {
            iterate(obj[key])
        }
        if(obj[key] == null || obj[key] == undefined ){
            let path = findPath(data,`${key}`)
            if(path.length == 0 )  console.log(`${path}${key}`)
            else console.log(`${path} ${key}`)
        }
    })
}

iterate(data)


// key2 key22
// key2 key23 key212
// key2 key23 key213 key2132
// key2 key23 key213 key2133 key21332 key213321
// key2 key23 key213 key2133 key21333
// key2 key23 key213 key2133 key21334 key213341
// key2 key23 key213 key2133 key21334 key213342
// key4
// key5 key51 key511 key5111
// key5 key51 key511 key5112
// key5 key51 key511 key5113
// key5 key51 key511 key5114 key51142
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143111 key511431111
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143111 key511431112
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143112 key511431121
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143112 key511431122 key5114311221
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143112 key511431122 key5114311222
// key5 key51 key511 key5114 key51143 key511431 key5114311 key51143113
// key5 key51 key512
// key5 key53


  