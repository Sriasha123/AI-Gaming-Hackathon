export default function Stats(){

const data=[

{title:"Prize Pool",value:"₹5,00,000"},
{title:"Participants",value:"1200+"},
{title:"Colleges",value:"75+"},
{title:"Startups",value:"30+"}

]

return(

<div className="grid grid-cols-4 gap-5 p-10">

{data.map((item,index)=>(

<div
key={index}
className="bg-gray-900 p-10 rounded text-center"
>

<h1 className="text-3xl">

{item.value}

</h1>

<p>{item.title}</p>

</div>

))}

</div>

)

}