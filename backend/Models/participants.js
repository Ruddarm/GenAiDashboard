const mongoose = require('mongoose')

const participantsSchema = mongoose.Schema(
    {
        userName:String,
        userEmail:String,
        profilelink: {
            text:String,
            hyperlink:String
        },
        TotalBadage:Number,
        status:String,
        arcadeGames:Boolean,
        Eligible:Boolean
    }

)
const participantsModel = mongoose.model('participants',participantsSchema);
module.exports=participantsModel;