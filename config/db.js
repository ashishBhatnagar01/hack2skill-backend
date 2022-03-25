const mongoose = require('mongoose')
require('dotenv').config()

// DB CONNECTION
module.exports.connectDB=()=>{
    const URI=process.env.MONGO_URI
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("Connection Established"))
}
