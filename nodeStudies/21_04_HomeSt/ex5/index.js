const lib = require('./calc')
console.log(lib.func1(6,7))
console.log(lib.func2(7,4))

const func = require('./printArr')
let someArr =[1,2,3,4,"fjhgfjhfjhgdf",3662]
func(someArr);
const os = require('os')
let res = os.platform()
console.log(res)

