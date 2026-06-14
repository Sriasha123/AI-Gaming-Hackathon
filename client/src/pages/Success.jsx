import {useLocation} from "react-router-dom"

export default function Success(){

const location=useLocation()

const teamId=location.state?.teamId

return(

<div className="min-h-screen flex justify-center items-center">

<div className="bg-gray-900 p-10 rounded-xl text-center">

<h1 className="text-5xl mb-6">

🎉 Registration Successful

</h1>

<h2 className="text-2xl">

Your Team ID:

</h2>

<div className="bg-purple-700 p-5 rounded mt-4">

{teamId}

</div>

<p className="mt-6">

Save this Team ID for future use

</p>

</div>

</div>

)

}