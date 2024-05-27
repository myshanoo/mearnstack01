import React from 'react'
import { useState } from 'react'

import axios from 'axios'

function Login() {

    const [data,setData]=useState({
        name:'',
        email:'',
    })

    const loginUser=(e)=>{

        e.preventDefault()
        axios.get('api/v1/')

    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type='email' placeholder='Enter email..' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>

                <label>Password</label>
                <input type='password' placeholder='Enter password..' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login