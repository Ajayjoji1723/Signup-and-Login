import { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import './index.css'

function Login() {


    const [userData, setUserData] = useState([])
    let fetchData = async()=>{
        let response = await fetch('http://localhost:3001')
        let data = await response.json()
        setUserData(data)
    }
    useEffect(()=>{
        fetchData()
    },[])
    
    console.log(userData)

    const [mailid,setMailId] = useState('')
    const onChangeMail=e=>{
        setMailId(e.target.value)
    }

    const [password,setPassword]= useState('')
    const onChangePassword = e=>{
        setPassword(e.target.value)
    }
   const navigate = useNavigate()
    const [user,setUser] = useState('')

    const onSubmit=e=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{mailid: mailid,password: password})
        .then(res=>{
            setUser(res.data)
            
        }).catch(err=>{
            console.log(err)
        })
        if (user === 'Employee'){
            navigate("/employee")
        }else if (user === 'Student'){
            navigate("/student")
        }else{
            alert(`${user}`)
        }
    }
    console.log(user)
    
    return(
        <div className='app-container'>
            <h1>Enter your Login Details</h1>
            <form className='form-container' onSubmit={onSubmit}>
                <label>Enter your Email</label>
                <input type="email" onChange={onChangeMail} value={mailid}/>
                <label>Enter your password</label>
                <input type="password" onChange={onChangePassword} value={password}/>
                <button className='btn btn-primary'>Login</button>
                <Link to="/register">Register</Link>
            </form>    
        </div>
    )
}

export default Login