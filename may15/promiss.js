let p = new Promise((resolve,reject)=>{
 
   setTimeout(()=>{

    console.log("asyncronous ops compleated") 
    resolve("Succesfully")
   },3000)  



})

console.log("promise",p)
p.then((res)=>{console.log(res,"uFFF")})