import {useState} from "react"

export default function FAQ(){

const questions=[

{
q:"What is the team size?",
a:"2-5 members"
},

{
q:"Is there any registration fee?",
a:"₹300 per student"
},

{
q:"Will certificates be provided?",
a:"Yes"
},

{
q:"Online or Offline?",
a:"Hybrid mode"
}

]

const [open,setOpen]=useState(null)

return(

<div className="py-24 px-16">

<h1 className="text-5xl text-center font-bold mb-16">

FAQ

</h1>

{

questions.map((item,index)=>(

<div
key={index}
className="bg-gray-900 mb-5 rounded p-5 cursor-pointer"
onClick={()=>setOpen(open===index?null:index)}
>

<h2>

{item.q}

</h2>

{

open===index &&

<p className="mt-3">

{item.a}

</p>

}

</div>

))

}

</div>

)

}