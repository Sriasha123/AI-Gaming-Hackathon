const express=require("express")

const multer=require("multer")

const router=express.Router()

const storage=multer.diskStorage({

destination:(req,file,cb)=>{

cb(null,"uploads/")

},

filename:(req,file,cb)=>{

cb(

null,

Date.now()+"-"+file.originalname

)

}

})

const upload=multer({

storage

})

router.post(

"/receipt",

upload.single("file"),

(req,res)=>{

res.json({

message:"File uploaded",

filename:req.file.filename

})

}

)

module.exports=router