const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const userSchema= new Schema({
    full_name:{
        type:String
    },
    email:{
        type:String
    },
    number:{
        type:Number
    },
    city:{
        type:String
    },
    url:{
        type:String
    }
})

module.exports=mongoose.model("Users",userSchema)