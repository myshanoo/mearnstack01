import React from 'react'

function Login() {

    const loginUser=()=>{


    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type='email' placeholder='Enter email..' />

                <label>Password</label>
                <input type='password' placeholder='Enter password..' />

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login