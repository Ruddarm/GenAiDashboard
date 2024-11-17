const mongoose = require("mongoose");

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true })
        console.log("Connection Sucessfull")
    }catch(e){
        console.log(e.message)
    }
}
module.exports= connectDb;