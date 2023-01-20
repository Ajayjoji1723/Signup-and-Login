import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './index.css'

function Login() {
    const [optionId,setOptionId] = useState('Student')
    const onChangeOptionId = e=>{
        setOptionId(e.target.value) 
    }
    console.log(optionId)

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

    const onSubmit=e=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{optionid:optionId,mailid:mailid,password:password})
        .then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
        if (optionId === 'Student' && mailid !== '' && password !== ''){
            navigate("/student")
        }else{
            navigate("/employee")
        }
    }
    
    return(
        <div className='app-container'>
            <h1>Enter your Login Details</h1>
            <form className='form-container' onSubmit={onSubmit}>
            <select onChange={onChangeOptionId} value={optionId}>
                <option>Student</option>
                <option>Employee</option>
            </select>
            <label>Enter your Email</label>
            <input type="email" onChange={onChangeMail} value={mailid}/>
            <label>Enter your password</label>
            <input type="password" onChange={onChangePassword} value={password}/>
          
            <button className='btn btn-primary'>Login</button>
                
          
            
            </form>    
        </div>
    )
}

export default Login