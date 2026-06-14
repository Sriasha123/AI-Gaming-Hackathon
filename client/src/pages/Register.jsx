import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Payment from "../components/Payment/Payment"

export default function Register(){

const [data,setData]=useState({

teamName:"",
category:"",
projectTheme:"",
leaderName:"",
email:"",
memberCount:0,
transactionId:"",
members:[]

})
const navigate=useNavigate()

const feePerPerson={

Students:300,
"IT Professionals":1000,
Startups:5000

}

const handleChange=(e)=>{

setData({

...data,
[e.target.name]:e.target.value

})

}

const handleCategory=(e)=>{

const category=e.target.value

let defaultCount=2

setData({

...data,
category,
memberCount:defaultCount,
members:Array(defaultCount).fill({

name:"",
email:""

})

})

}

const handleMemberCount=(e)=>{

const count=parseInt(e.target.value)

setData({

...data,

memberCount:count,

members:Array(count).fill({

name:"",
email:""

})

})

}

const handleMemberChange=(index,field,value)=>{

const updated=[...data.members]

updated[index]={

...updated[index],
[field]:value

}

setData({

...data,
members:updated

})

}

const calculateTotal=()=>{

if(!data.category) return 0

if(data.category==="Startups"){

return feePerPerson[data.category]

}

return feePerPerson[data.category]*data.memberCount

}

const submit=async()=>{

try{

const response=await axios.post(

"http://localhost:5000/api/register",
data

)

navigate(

"/success",

{

state:{

teamId:response.data.teamId

}

}

)

}
catch(error){

console.log(error)

alert("Registration Failed")

}

}

return(

<div className="min-h-screen flex justify-center items-center p-10">

<div className="bg-gray-900 p-10 rounded-xl w-[700px]">

<h1 className="text-4xl text-center mb-8">

Team Registration

</h1>


<input
name="teamName"
placeholder="Team Name"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<select
name="category"
onChange={handleCategory}
className="w-full p-4 rounded bg-white text-black mb-4"
>

<option value="">Select Category</option>

<option value="Students">

Students

</option>

<option value="IT Professionals">

IT Professionals

</option>

<option value="Startups">

Startups

</option>

</select>


{

data.category==="Students" &&

<select
onChange={handleMemberCount}
className="w-full p-4 rounded bg-white text-black mb-4"
>

<option value="2">2 Members</option>
<option value="3">3 Members</option>
<option value="4">4 Members</option>
<option value="5">5 Members</option>

</select>

}


{

data.category==="IT Professionals" &&

<select
onChange={handleMemberCount}
className="w-full p-4 rounded bg-white text-black mb-4"
>

<option value="2">2 Members</option>
<option value="3">3 Members</option>

</select>

}


<div className="bg-purple-900 p-4 rounded mb-4">

Total Fee: ₹{calculateTotal()}

</div>


<select
name="projectTheme"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
>

<option>Select Theme</option>

<option>AI NPC Systems</option>

<option>Procedural Content Generation</option>

<option>AI for Game Testing & Balancing</option>

<option>AR/VR Gaming Experience</option>

<option>Esports Analytics & AI</option>

<option>Serious Games for Social Impact</option>

<option>Metaverse/Web3 Gaming</option>

</select>


<input
name="leaderName"
placeholder="Leader Name"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>

<input
name="email"
placeholder="Leader Email"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<h2 className="text-2xl mt-6 mb-4">

Team Members

</h2>


{

data.members.map((member,index)=>(

<div
key={index}
className="bg-gray-800 p-4 rounded mb-4"
>

<input
placeholder={`Member ${index+1} Name`}
className="w-full p-3 rounded bg-white text-black mb-3"
onChange={(e)=>handleMemberChange(
index,
"name",
e.target.value
)}
/>

<input
placeholder={`Member ${index+1} Email`}
className="w-full p-3 rounded bg-white text-black"
onChange={(e)=>handleMemberChange(
index,
"email",
e.target.value
)}
/>

</div>

))

}

<Payment/>
<input
name="transactionId"
placeholder="Transaction ID"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mt-4 mb-4"
/>
<input
type="file"
className="w-full p-4 mb-4"
/>
<div className="card mb-4">

Upload payment screenshot/receipt

</div>
<button
onClick={submit}
className="w-full bg-purple-700 p-4 rounded mt-6"
>

Register Team

</button>

</div>

</div>

)

}