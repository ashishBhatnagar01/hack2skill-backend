const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const teamSchema= new Schema({
    full_name:{
        type:String
    },
    email:{
        type:String
    },
    team_name:{
        type:String
    }
})

module.exports=mongoose.model("Teams",teamSchema)