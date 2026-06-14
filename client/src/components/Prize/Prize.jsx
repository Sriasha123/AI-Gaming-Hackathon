export default function Prize(){

const prizes=[

{
title:"Winner",
reward:"₹50,000 + Internship"
},

{
title:"Runner Up",
reward:"₹25,000 + Goodies"
},

{
title:"Special Award",
reward:"Certificates + Mentorship"
}

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Prize Pool

</h1>

<div className="grid grid-cols-3 gap-8 px-16">

{

prizes.map((item,index)=>(

<div
key={index}
className="bg-gradient-to-r from-purple-800 to-pink-700 p-10 rounded-xl hover:scale-105 transition"
>

<h2 className="text-3xl mb-4">

🏆 {item.title}

</h2>

<p>

{item.reward}

</p>

</div>

))

}

</div>

</div>

)

}