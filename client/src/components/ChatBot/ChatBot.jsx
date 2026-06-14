import {useState} from "react"

export default function ChatBot(){

const [open,setOpen]=useState(false)

const [messages,setMessages]=useState([

{

sender:"bot",

text:"Hi 👋 I'm HackBot. Ask me anything!"

}

])

const [input,setInput]=useState("")


const replies={

"registration":

"Registration closes on August 25.",

"payment":

"Payment can be completed using QR or gateway.",

"team":

"Students: 2-5 members, IT: 2-3, Startup: 2 members.",

"default":

"Please contact admin for more details."

}


const sendMessage=()=>{

if(!input) return

const userMessage={

sender:"user",
text:input

}

let response=

replies.default

const text=input.toLowerCase()

if(text.includes("register"))
response=replies.registration

if(text.includes("payment"))
response=replies.payment

if(text.includes("team"))
response=replies.team


setMessages([

...messages,

userMessage,

{

sender:"bot",
text:response

}

])

setInput("")

}


return(

<>

<button

onClick={()=>setOpen(!open)}

className="fixed bottom-5 left-5 bg-purple-700 p-4 rounded-full"

>

🤖

</button>


{

open &&

<div className="fixed bottom-20 left-5 w-[350px] bg-gray-900 rounded p-4">

<h2 className="mb-4">

AI Help Assistant

</h2>

<div className="h-[250px] overflow-y-auto">

{

messages.map((msg,index)=>(

<div
key={index}
className={`mb-3 p-2 rounded ${
msg.sender==="user"

?

"bg-purple-700"

:

"bg-gray-700"

}`}

>

{msg.text}

</div>

))

}

</div>


<input

value={input}

onChange={(e)=>setInput(e.target.value)}

placeholder="Ask something..."

className="w-full p-3 rounded text-black bg-white mt-4"

/>


<button

onClick={sendMessage}

className="bg-purple-700 p-3 rounded w-full mt-3"

>

Send

</button>

</div>

}

</>

)

}