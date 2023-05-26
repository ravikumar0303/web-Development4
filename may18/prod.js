
let obj={x1:45,pass:"Number is 45:"}
 let obj2={x2:45, x3:56 , que:"no need"}


console.log(obj.x1)
console.log(obj2)

let str =JSON.stringify(obj)
console.log("str","str")


console.log("str.x1",str.x1)

console.log(JSON.parse(str))