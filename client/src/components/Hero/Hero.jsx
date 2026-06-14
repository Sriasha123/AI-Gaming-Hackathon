import {motion} from "framer-motion"

export default function Hero(){

return(

<div className="min-h-screen flex flex-col justify-center items-center text-center px-10">

<motion.h1

initial={{opacity:0,y:-50}}
animate={{opacity:1,y:0}}

transition={{duration:1}}

className="text-7xl font-bold"

>

AI Gaming Hackathon

</motion.h1>

<p className="mt-6 text-2xl">

Build • Compete • Innovate • Win 🚀

</p>

<button

className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full"

>

Register Now

</button>

</div>

)

}