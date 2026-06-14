const nodemailer=require("nodemailer")

const sendEmail=async(

to,
subject,
text

)=>{

if(

!process.env.EMAIL_USER ||

!process.env.EMAIL_PASS

){

console.log(

"Email credentials not found. Skipping email."

)

return

}

try{

const transporter=

nodemailer.createTransport({

service:"gmail",

auth:{

user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS

}

})

await transporter.sendMail({

from:process.env.EMAIL_USER,

to,
subject,
text

})

console.log("Email sent")

}

catch(error){

console.log(error)

}

}

module.exports=sendEmail