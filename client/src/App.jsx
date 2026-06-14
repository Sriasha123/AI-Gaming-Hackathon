import {BrowserRouter,Routes,Route}
from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Admin from "./pages/Admin"
import Success from "./pages/Success"

function App(){

return(

<BrowserRouter>

<Routes>

<Route
path="/"
element={<Home/>}
/>

<Route
path="/register"
element={<Register/>}
/>

<Route
path="/success"
element={<Success/>}
/>


<Route
path="/dashboard"
element={<Dashboard/>}
/>

<Route
path="/admin"
element={<Admin/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App