import {Link} from "react-router-dom"

export default function Navbar(){

return(

<nav className="flex justify-between p-5 bg-black">

<h1 className="text-2xl font-bold">

AI Gaming

</h1>

<div className="space-x-4">

<Link to="/">Home</Link>

<Link to="/register">Register</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/admin">Admin</Link>

</div>

</nav>

)

}