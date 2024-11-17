const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const DbOperation = require('../Db/MongoOperation');
dotenv.config();
const app = express()
DbOperation()
app.listen(8080, ()=>{

})
