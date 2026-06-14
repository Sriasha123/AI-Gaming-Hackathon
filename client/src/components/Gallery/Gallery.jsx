export default function Gallery(){

const images=[

"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

"https://images.unsplash.com/photo-1542751371-adc38448a05e",

"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",

"https://images.unsplash.com/photo-1518770660439-4636190af475"

]

return(

<div className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">

Event Gallery

</h1>

<div className="grid grid-cols-2 gap-8 px-16">

{

images.map((img,index)=>(

<img
key={index}
src={img}
className="rounded-xl hover:scale-105 transition h-80 w-full object-cover"
/>

))

}

</div>

</div>

)

}