import {useEffect,useState} from "react"
import axios from "axios"
import Leaderboard from "../components/Leaderboard/Leaderboard"
import ChatBot from "../components/ChatBot/ChatBot"

export default function Dashboard(){

const [announcement,setAnnouncement]=useState([])

const [submission,setSubmission]=useState({

github:"",
demo:"",
ppt:"",
description:""

})


useEffect(()=>{

loadAnnouncement()

},[])


const loadAnnouncement=async()=>{

try{

const response=await axios.get(

"http://localhost:5000/api/announcement"

)

setAnnouncement(response.data)

}

catch(error){

console.log(error)

}

}


const handleChange=(e)=>{

setSubmission({

...submission,
[e.target.name]:e.target.value

})

}


const submitProject=()=>{

alert("Project Submitted Successfully")

}


return(

<div className="min-h-screen p-10">

<h1 className="text-5xl mb-10">

Participant Dashboard

</h1>


<div className="grid grid-cols-3 gap-5 mb-10">

<div className="bg-purple-900 p-6 rounded">

<h2>Team Status</h2>

<p>Approved</p>

</div>

<div className="bg-green-700 p-6 rounded">

<h2>Payment</h2>

<p>Completed</p>

</div>

<div className="bg-blue-700 p-6 rounded">

<h2>Submission Status</h2>

<p>Pending</p>

</div>

</div>


<h2 className="text-3xl mb-6">

Announcements

</h2>


{

announcement.length ?

announcement.map((item)=>(

<div
key={item.id}
className="bg-gray-900 p-5 rounded mb-4"
>

<h3 className="font-bold">

{item.title}

</h3>

<p>

{item.message}

</p>

</div>

))

:

<div className="bg-gray-900 p-5 rounded">

<h3>

Hackathon Begins Soon 🚀

</h3>

<p>

Prepare your project submission and team presentation.

</p>

</div>

}


<h2 className="text-3xl mt-10 mb-6">

Project Submission

</h2>


<input
name="github"
placeholder="Github Repository URL"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<input
name="demo"
placeholder="Demo Video URL"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<input
name="ppt"
placeholder="PPT Drive Link"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<textarea
name="description"
placeholder="Project Description"
onChange={handleChange}
className="w-full p-4 rounded bg-white text-black mb-4"
/>


<button
onClick={submitProject}
className="bg-purple-700 p-4 rounded w-full"
>

Submit Project

</button>
<Leaderboard/>
<ChatBot/>
</div>

)

}