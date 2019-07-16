const o = {
  a: 'a',
  b: 'b',
}


const o2 = Object.assign({}, o)
o2.a = 'new value'

console.log(o.a)
