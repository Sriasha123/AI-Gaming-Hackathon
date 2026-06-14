import {FaInstagram,FaEnvelope} from "react-icons/fa"

export default function FloatingButtons(){

return(

<div className="fixed bottom-8 right-8 flex flex-col gap-4">

<button className="bg-pink-600 p-4 rounded-full">

<FaInstagram/>

</button>

<button className="bg-blue-600 p-4 rounded-full">

<FaEnvelope/>

</button>

</div>

)

}