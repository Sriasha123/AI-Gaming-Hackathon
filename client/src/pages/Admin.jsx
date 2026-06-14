import {useEffect,useState} from "react"
import axios from "axios"

import {

BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
PieChart,
Pie,
Cell

} from "recharts"

export default function Admin(){

const [teams,setTeams]=useState([])

const chartData=[

{
category:"Students",
count:25
},

{
category:"IT",
count:12
},

{
category:"Startups",
count:8
}

]

const colors=[

"#8B5CF6",
"#3B82F6",
"#22C55E"

]

useEffect(()=>{

fetchTeams()

},[])


const fetchTeams=async()=>{

try{

const response=await axios.get(

"http://localhost:5000/api/teams"

)

setTeams(response.data)

}

catch(error){

console.log(error)

}

}


return(

<div className="min-h-screen p-10">

<h1 className="text-5xl mb-10">

Admin Dashboard

</h1>


<div className="grid grid-cols-3 gap-5 mb-10">

<div className="bg-purple-900 p-6 rounded">

<h2>Total Teams</h2>

<h1 className="text-4xl">

{teams.length || 45}

</h1>

</div>


<div className="bg-green-700 p-6 rounded">

<h2>Revenue</h2>

<h1 className="text-4xl">

₹1,25,000

</h1>

</div>


<div className="bg-blue-700 p-6 rounded">

<h2>Approved Teams</h2>

<h1 className="text-4xl">

20

</h1>

</div>

</div>
<a

href="http://localhost:5000/api/export"

className="bg-green-700 p-4 rounded inline-block mb-6"

>

Export CSV

</a>


<div className="grid grid-cols-2 gap-10">

<div className="bg-gray-900 p-6 rounded">

<h2 className="mb-6">

Registrations

</h2>

<BarChart
width={400}
height={300}
data={chartData}
>

<XAxis dataKey="category"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="count"
fill="#8B5CF6"
/>

</BarChart>

</div>



<div className="bg-gray-900 p-6 rounded">

<h2 className="mb-6">

Category Distribution

</h2>

<PieChart
width={400}
height={300}
>

<Pie

data={chartData}
dataKey="count"
outerRadius={100}

>

{

chartData.map((entry,index)=>(

<Cell
key={index}
fill={colors[index]}
/>

))

}

</Pie>

<Tooltip/>

</PieChart>

</div>

</div>


<h2 className="text-3xl mt-10 mb-5">

Recent Teams

</h2>


<table className="w-full bg-gray-900">

<thead>

<tr>

<th>Team</th>
<th>Category</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{

teams.length ?

teams.map((team)=>(

<tr
key={team.id}
className="border-b text-center"
>

<td>{team.teamName}</td>

<td>{team.category}</td>

<td>{team.status}</td>

</tr>

))

:

[

{
id:1,
teamName:"AI Titans",
category:"Students",
status:"Approved"
},

{
id:2,
teamName:"Cyber Warriors",
category:"IT",
status:"Pending"
}

].map((team)=>(

<tr
key={team.id}
className="border-b text-center"
>

<td>{team.teamName}</td>

<td>{team.category}</td>

<td>{team.status}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}