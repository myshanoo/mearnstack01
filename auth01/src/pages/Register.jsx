import React from 'react'
import { useState } from 'react'

function Register() {

    const [data,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    const registeruser = (e) => {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={registeruser}>
                <label>Name</label>
                <input type='text' placeholder='Enter name..' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} />

                <label>Email</label>
                <input type='email' placeholder='Enter email..' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>

                <label>Password</label>
                <input type='password' placeholder='Enter password..' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Register