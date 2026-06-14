import CountdownTimer from "react-countdown"

export default function Countdown(){

const targetDate=new Date("2026-08-01")

return(

<div className="py-20 text-center">

<h2 className="text-4xl font-bold mb-10">

Registration Ends In

</h2>

<CountdownTimer
date={targetDate}
renderer={({days,hours,minutes,seconds})=>(

<div className="flex justify-center gap-6">

<div className="bg-purple-700 p-6 rounded">
<h1>{days}</h1>
<p>Days</p>
</div>

<div className="bg-purple-700 p-6 rounded">
<h1>{hours}</h1>
<p>Hours</p>
</div>

<div className="bg-purple-700 p-6 rounded">
<h1>{minutes}</h1>
<p>Minutes</p>
</div>

<div className="bg-purple-700 p-6 rounded">
<h1>{seconds}</h1>
<p>Seconds</p>
</div>

</div>

)}
/>

</div>

)

}