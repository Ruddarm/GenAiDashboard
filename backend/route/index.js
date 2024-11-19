const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const DbOperation = require("../Db/MongoOperation");
const participant = require("../Models/participants");

const allowedOrigins = ['https://gdg-on-bvp-dms.netlify.app/','http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
  
app.use(corsOptions)
dotenv.config();
const app = express();
DbOperation();
app.listen(8080, () => {});

app.get('/',(req,res)=>{
    // console.log("Han sun raha hu bc")
    res.send("han sun raha hu bc")
})
app.get('/name',(req,res)=>{
  res.send({name:"ruddarm"});
})