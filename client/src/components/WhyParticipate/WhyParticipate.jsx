export default function WhyParticipate(){

const benefits=[

"Win exciting prizes",
"Internship opportunities",
"National recognition",
"Build portfolio",
"Meet startups",
"Networking"

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Why Participate?

</h1>

<div className="grid grid-cols-3 gap-8 px-16">

{

benefits.map((item,index)=>(

<div
key={index}
className="bg-purple-900 p-10 rounded text-center"
>

{item}

</div>

))

}

</div>

</div>

)

}