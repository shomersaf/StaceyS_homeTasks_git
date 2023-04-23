console.log("Where am I?")
let a:number =1
let b:string = "omg"
let c:boolean = false
let d:null = null
let e:undefined = undefined
//let f:object ={}
let f:{text:string} ={text: "Hello"}
//------------------
//data type "any" - is a standard default type of JS
let g
g = 1
g = "hello"
g = null
g = true
g = undefined
g = {}
g = function(){}
//or:
let g1: any

function func(x:number,y:number):number{
    return x + y
}
 let func2 = (x:number, y:number):number =>x + y

 //data type below is so called signature of function
 let func3:(x:number, y:number) => number
//here is how we can use this dada type:
func3 = function (x:number, y:number):number {
    return x + y
}
//data type void means we don't use command return
function func4(x:number, y:number):void {
    console.log( x + y)
}
//this dada type means that this fn never ends
function func5(abc:string):never{
    throw new Error
}

//peregruzka funktsii
function func6 (x:number,y:number):number
function func6 (x:string,y:number):number
function func6 (x:any,y:any):any{
    if(typeof x === 'number'){
       return x + y
    } else {
        return `${x} + ${y} `
    }
}

console.log(func6(1,2))
console.log(func6('Answer is',2))
console.log("OOOOOHHHHH")

