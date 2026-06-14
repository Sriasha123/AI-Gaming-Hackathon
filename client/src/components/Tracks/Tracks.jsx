export default function Tracks(){

const tracks=[

"AI NPC Systems",
"Game Testing AI",
"AR/VR Gaming",
"Esports Analytics",
"Serious Games",
"Metaverse Gaming"

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Hackathon Tracks

</h1>

<div className="grid grid-cols-3 gap-8 px-16">

{

tracks.map((track,index)=>(

<div
key={index}
className="bg-gray-900 rounded p-10 hover:scale-105 transition"
>

<h2 className="text-2xl">

{track}

</h2>

</div>

))

}

</div>

</div>

)

}