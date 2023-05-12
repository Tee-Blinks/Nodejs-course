// const os =require('os');
// const path =require('path');



// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())


// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// // console.log(path.basename(__filename));
// // // console.log(path.extname(path))


// console.log(path.parse(__filename));

const math = require('./math');
const uber = require('./uber')


const add = math.add(50, 30)
console.log(add)


const subtract = math.subtract(50, 30)
console.log(subtract)


const division = math.division(50, 30)
console.log(division)


const multiply = math.multiply(50, 30)
console.log(multiply)




uber.uberReady()
const fuelStatus =uber.FuelLimit('hey, stop there! You have reach')

console.log(fuelStatus)