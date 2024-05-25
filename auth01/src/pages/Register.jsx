import React from 'react'

function Register() {
    const registeruser = (e) => {
e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={registeruser}>
                <label>Name</label>
                <input type='text' placeholder='Enter name..' />

                <label>Email</label>
                <input type='email' placeholder='Enter email..' />

                <label>Password</label>
                <input type='password' placeholder='Enter password..' />
                <button>Submit</button>

            </form>
        </div>
    )
}

export default Register