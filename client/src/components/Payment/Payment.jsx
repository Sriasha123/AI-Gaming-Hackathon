import {useState} from "react"

export default function Payment(){

const [transactionId,setTransactionId]=useState("")

return(

<div className="bg-gray-900 p-10 rounded mt-8">

<h1 className="text-3xl mb-6">

Payment

</h1>

<div className="flex justify-center">

<img
src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=hackathon@upi"
className="rounded"
/>

</div>

<p className="text-center mt-4">

Scan QR and complete payment

</p>

<input
placeholder="Enter Transaction ID"
value={transactionId}
onChange={(e)=>setTransactionId(e.target.value)}
className="w-full p-4 rounded bg-white text-black mt-6"
/>

</div>

)

}