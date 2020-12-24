const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("Artbook"));

var userdata;
var write;

app.post("/login",(req,res)=>{
  userdata = req.body;
  userdata = JSON.stringify(userdata);
  res.sendFile(path.join(__dirname,"Artbook","landing.html"));
});

app.get("/setdata",(req,res)=>{
  res.send(userdata);
});
app.post("/html",(req,res)=>{
  write = JSON.stringify(req.body);
});

app.get("/display",(req,res)=>{
  res.send(write);
});

const PORT = 3001;
app.listen(PORT);
