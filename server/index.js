const express = require("express");
const path = require("path");

const app = express()

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

app.listen(5000, () => {
      console.log("server started on port 5000");
});


app.get("/join",(req,res)=>{
      res.send('Hello World!')
});