import express from "express";
let app = express();
import path from "path";
app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.sendFile("C:\\Users\\IET\\Desktop\\JavaScript\\project.js\\login.html");
});

app.get("/ravi", (req, res) => {
  let user = req.query.uname;
  let email = req.query.email;
  let pwd = req.query.password;

  if (user == "CDAC" && email == "ravi@gmail.com" && pwd == "2001") {
    // res.render("welcome",{username:user})
    res.sendFile(
      "C:\\Users\\IET\\Desktop\\JavaScript\\project.js\\welcome.html"
    );
  } else
    res.sendFile("C:\\Users\\IET\\Desktop\\JavaScript\\project.js\\login.html");
});

app.get("/calculator", (req, res) => {
  res.render("cal");
});

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/docalculation", (req, res) => {
  let n1 = req.body.num1;
  let n2 = req.body.num2;

  let sum = parseInt(n1) + parseInt(n2);
  res.render("cal", { result: sum });
});

app.listen(2001, (req, res) => {
  console.log("Server is running Port :2001");
});
