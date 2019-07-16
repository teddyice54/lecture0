//3 different ways to declare an object in JS

const o = new Object()
o.firstName = "Ted"
o.lastName = 'Koller'
o.isLearning = true
o.greet = function () { 
console.log('hi!')
}


const o2 = {}
o.firstName = 'Ted'
o['lastName'] = 'Koller'
const key = "isLearning" 
o[key]=true
o['greet']= function() {
console.log('hi')
}

const o3 = {
firstName: 'Ted',
lastName: 'Koller',
isLearning: true,
greet: function() { 
console.log('hi!')
}
  }
