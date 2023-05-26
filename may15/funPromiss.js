function x1()
{
    console.log("Hey!")

}

function x2()
{
console.log("hii")
}

function ravi()

 {
     console.log("ravi")

     setTimeout(x1,1)
     setTimeout(x2,50)


     let r= new Promise((res,rej)=>{

        let num=Math.random()*200

        if (num<200)
        {
          res("Success"+num)
        }
        else
          rej("reject"+num)
     })


     console.log("kumar")
     r.then((resolve)=>{console.log(resolve)})
     r.catch((reject)=>{console.log(reject)})
 }
 ravi()
