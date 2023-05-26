let r = new Promise((res,rej)=>{
    rej("something Wrong")
})

console.log("promise",r)

r.catch((rej)=>{console.log(rej)})