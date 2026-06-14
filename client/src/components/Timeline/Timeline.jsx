export default function Timeline(){

const events=[

"Registration Opens",

"Round 1",

"Hackathon Begins",

"Submission Deadline",

"Winner Announcement"

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Timeline

</h1>

<div className="flex justify-center gap-6 flex-wrap">

{

events.map((event,index)=>(

<div
key={index}
className="bg-gray-900 p-8 rounded-xl w-48 text-center"
>

<h3>

{event}

</h3>

</div>

))

}

</div>

</div>

)

}