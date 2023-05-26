import express from "express";
let app = express();

app.get("/factorial/:num", (req, res) => {
  console.log(" Even number is call ");
  let n = req.params.num;
  let fact = 1;
  for (var i = 2; i <= n; i++) {
    fact = fact * i;
  }

  res.send(`factorial of ${n} is ${fact}`);
});

app.listen(3030, () => {
  console.log(`app listinning is port No.3030 `);
});
