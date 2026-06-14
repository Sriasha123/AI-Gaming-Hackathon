require("dotenv").config()
const express=require("express")
const cors=require("cors")

const registrationRoutes=require("./routes/registrationRoutes")
const uploadRoutes=
require("./routes/uploadRoutes")
const app=express()

app.use(

cors({

origin:true,
credentials:true

})

)

app.use(express.json())

app.use("/api",registrationRoutes)
app.use(
"/upload",
uploadRoutes
)

app.use(

"/uploads",

express.static("uploads")

)

app.get("/",(req,res)=>{

res.send("Server Running")

})


const PORT=

process.env.PORT || 5000


app.listen(PORT,()=>{

console.log(

`Server running on ${PORT}`

)

})