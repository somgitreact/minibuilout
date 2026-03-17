import React, { useState } from 'react'

const Login = () => {
    const [error, setError] = useState(false)
    const [match, setMatch] = useState(false)
    const [input, setInput] = useState({
        user: '',
        pass: ''
    })

    const checkHandler = (e) => {
        e.preventDefault()

        // ❗ handle empty fields first
        if (!input.user || !input.pass) {
            setError(false)
            setMatch(false)
            return
        }

        // ❗ correct validation
        if (input.user !== 'user' || input.pass !== 'password') {
            setError(true)
            setMatch(false)
        } else {
            setError(false)
            setMatch(true)
        }
    }

    return (
        <div>
            <h1>Login</h1>

            {error && <p className='error'>Invalid username or password</p>}

            {match ? (
                <h3>Welcome, user</h3>
            ) : (
                <form onSubmit={checkHandler}>
                    
                    {/* ✅ input must be NEXT sibling */}
                    <label htmlFor='username'>Username</label>
                    <input
                        id="username"
                        type='text'
                        value={input.user}
                        onChange={(e) =>
                            setInput(prev => ({ ...prev, user: e.target.value }))
                        }
                    />

                    <label htmlFor='pass'>Password</label>
                    <input
                        id="pass"
                        type='password'
                        value={input.pass}
                        onChange={(e) =>
                            setInput(prev => ({ ...prev, pass: e.target.value }))
                        }
                    />

                    <button type="submit">submit</button>
                </form>
            )}
        </div>
    )
}

export default Login