import { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import './index.css'

function Register() {
    let navigate = useNavigate()
    const [optionId, setOptionId] = useState('Student')
    const onChangeOption=e=>{
        setOptionId(e.target.value)
    }
    console.log(optionId)

    const [username,setUsername] = useState('')
    const onChangeUsername=e=>{
        setUsername(e.target.value)
    }
    console.log(username)

    const [mailid,setmailid] = useState('')
    const onChangeMailId=e=>{
        setmailid(e.target.value)
    }
    console.log(mailid)

    const [mobilenum, setmobileNum] = useState('')
    const onChangeMobileNum=e=>{
        setmobileNum(e.target.value)
    }
    console.log(mobilenum)

    const [password,setPassword] = useState('')
    const onChangePassword=e=>{
        setPassword(e.target.value)
    }
    console.log(password)

    const [companyName,setCompanyName]= useState('')
    const onChangeCompanyName=e=>{
        setCompanyName(e.target.value)
    }
    console.log(companyName)
    
    const [data,setData] = useState([])
    const onSubmitForm=e=>{
        e.preventDefault()
        if (username | mailid | mobilenum | password !== ''){
            axios.post('http://localhost:3001/register',{
            optionid:optionId, 
            username:username,
            mailid:mailid,
            companyname:companyName,
            mobilenum:mobilenum,
            password:password
        })
            .then(res=>setData(res.data)).catch(err=> console.log(err))
            navigate("/login")

        }else{
            alert('please enter req details')
        }
    }
    console.log(data)
    return(
        <div className='app-container'>
            <h1>Register Here</h1>
            <form className='form-container' onSubmit={onSubmitForm}>
                <select className='select' onChange={onChangeOption}>
                    <option>Student</option>
                    <option>Employee</option>
                </select>
                <label>Username</label>
                <input type="text" onChange={onChangeUsername} value={username}/>
                <label>Mail Id</label>
                <input type='email' onChange={onChangeMailId} value={mailid}/>
                {optionId === 'Employee'?(
                    <>
                    <label>Company Name</label>
                    <input type="text" onChange={onChangeCompanyName} value={companyName}/>
                    </>
                ):''}
                <label>Mobile Number</label>
                <input type='number' onChange={onChangeMobileNum} value={mobilenum}/>
                <label>Password</label>
                <input type='password' onChange={onChangePassword} value={password}/>
                <p className='pass-condition'>Password must be greater than 5 letters</p>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
export default Register