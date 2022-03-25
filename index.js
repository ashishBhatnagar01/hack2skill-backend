const {connectDB}=require('./config/db')
const express=require('express')
const app=express()
const cors=require('cors')
const routes=require('./routes/UserRoutes')
app.use(cors())
connectDB()

app.use("/",routes)

app.listen(process.env.PORT || 4000, ()=>{
    console.log("Server is running at port 4000")
})