const mongoose = require('mongoose')

const participantsSchema = mongoose.Schema(
    {
        userName:String,
        userEmail:String,
        TotalBadage:Number,
        rank:Number,
        status:Boolean,
        arcadeGames:Boolean,
        Eligible:Boolean
        
    }

)
const participantsModel = mongoose.model('participants',participantsSchema);
module.exports=participantsModel;