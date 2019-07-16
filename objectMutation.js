var o = {
  a: 'a',
  b: 'b',
obj: {
  key: 'key',
      },
}
var o2 = Object.assign({}, o)

//o2.a = 'new value'

//console.log(o.a)


//deep copy
function deepCopy(obj) {
  //check if vals are objects
  // if so copy that object (deep copy)
  //else return the value
 var keys = Object.keys(obj)
  
var newObject = {}
  
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i]
if (typeof obj [key] === 'object') {
  newObject[key] = deepCopy(obj[key])
  }
    else {
      newObject[key] = obj[key]
    }
  }
return Object.assign({}, obj)
}
