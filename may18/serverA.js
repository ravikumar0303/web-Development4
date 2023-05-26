import express, { json } from 'express';

const app = express();
let port=3030;

app.set('view engine', 'hbs');

app.use(json());

app.get("/ajax",(req,res)=>{
    res.render("calc")
  
})

app.post("/calc",(req,res)=>{
  //  res.render("square")
    let n1 = req.body.num1
    let n2 = req.body.num2
   
    let sum =parseInt(n1) +parseInt(n2)
     res.send({sum:sum})
    let mul =parseInt(n1) * parseInt(n2)
    res.send({mul:mul})
 
   
    // let div =parseInt(n1) / parseInt(n2)
    // res.send({div:div})
})


app.listen(port,()=>{
     console.log(`App is listen ${port} port number:`)

})
