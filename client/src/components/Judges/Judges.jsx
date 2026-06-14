export default function Judges(){

const judges=[

{
name:"Alex Carter",
role:"AI Engineer"
},

{
name:"Sarah Lee",
role:"Game Designer"
},

{
name:"David Kumar",
role:"Startup Founder"
}

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Judges & Mentors

</h1>

<div className="grid grid-cols-3 gap-8 px-16">

{

judges.map((judge,index)=>(

<div
key={index}
className="bg-gray-900 p-10 rounded-xl text-center"
>

<div className="w-24 h-24 rounded-full bg-purple-700 mx-auto mb-5"></div>

<h2>

{judge.name}

</h2>

<p>

{judge.role}

</p>

</div>

))

}

</div>

</div>

)

}