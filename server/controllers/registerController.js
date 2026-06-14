
const sendEmail=

require("../utils/sendEmail")
const {PrismaClient}=require("@prisma/client")
const {Parser}=require("json2csv")
const prisma=new PrismaClient()


const registerTeam=async(req,res)=>{

try{

const{

teamName,
category,
projectTheme,
leaderName,
email,
memberCount,
transactionId,
members

}=req.body


const generatedId=

"TEAM"+Math.floor(
1000+Math.random()*9000
)




const team=await prisma.team.create({

data:{

teamId:generatedId,

teamName,

category,

projectTheme,

memberCount,

transactionId,

paymentStatus:"Pending"

}

})


for(const member of members){

await prisma.teamMember.create({

data:{

name:member.name,
email:member.email,
teamRef:team.id

}

})

}


await sendEmail(

email,

"AI Gaming Hackathon Registration",

`Registration successful

Team ID: ${generatedId}

Thank you for participating.`

)


res.json({

message:"Registration successful",
teamId:generatedId

})

}

catch(error){

console.log(error)

res.status(500).json({

message:"Registration Failed"

})

}

}



const getTeams=async(req,res)=>{

try{

const teams=

await prisma.team.findMany({

include:{

members:true

}

})

res.json(teams)

}

catch(error){

console.log(error)

}

}


const updateStatus=async(req,res)=>{

try{

const {id,status}=req.body

await prisma.team.update({

where:{

id

},

data:{

status

}

})

res.json({

message:"Updated"

})

}

catch(error){

console.log(error)

}

}

const createAnnouncement=async(req,res)=>{

try{

const {title,message}=req.body

const announcement=

await prisma.announcement.create({

data:{

title,
message

}

})

res.json(announcement)

}

catch(error){

console.log(error)

}

}


const getAnnouncements=async(req,res)=>{

try{

const data=

await prisma.announcement.findMany({

orderBy:{

createdAt:"desc"

}

})

res.json(data)

}

catch(error){

console.log(error)

}

}
const exportTeams=async(req,res)=>{

try{

const teams=

await prisma.team.findMany({

include:{

members:true

}

})

const fields=[

"teamId",
"teamName",
"category",
"status",
"paymentStatus"

]

const parser=

new Parser({

fields

})

const csv=

parser.parse(teams)

res.header(

"Content-Type",
"text/csv"

)

res.attachment(

"teams.csv"

)

return res.send(csv)

}

catch(error){

console.log(error)

}

}
module.exports={

registerTeam,
getTeams,
updateStatus,
createAnnouncement,
getAnnouncements,
exportTeams

}