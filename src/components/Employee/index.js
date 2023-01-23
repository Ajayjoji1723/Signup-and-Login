import { Link } from "react-router-dom"
import Login from "../Login"

const Employee =()=>(
    <>
        <h1>Welocme to Employee Page{Login.user}</h1>
        <Link to="/">Home</Link>
    </>)

export default Employee