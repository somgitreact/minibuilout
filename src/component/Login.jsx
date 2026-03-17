import React, { useState } from 'react'

const Login = () => {
    const [error, setError] = useState(false)
    const [match, setMatch] = useState(false)
    const [input, setInput] = useState({
        user: '',
        pass: ''
    })
      // console.log(error, "===---")
    const checkHandler = (e)=>{
       e.preventDefault()
        if(input?.user !== 'user' && input?.pass !== 'password'){
             setError(true)
        } else {
            setError(false)
            setMatch(true)
        }
    }
  //  console.log(error, "-------");
    
  return (
    <div>
        <h1> Login </h1>
        
        {error && <p className='error'> Invalid username or password </p>}
       {match ?  <h3>Welcome User!</h3>  
       :
        <form onSubmit={checkHandler}>
<label htmlFor='username' > Username 
    <input id ="username" type='text' value={input?.user} onChange={(e)=>setInput((prev)=>({...prev, user: e.target.value}))} />
</label>
<label htmlFor='pass' >  Password
    <input id ="pass"  type='password' value={input?.pass} onChange={(e)=>setInput((prev)=>({...prev, pass: e.target.value}))} />
</label>
<button> submit</button>
        </form>
        }
    </div>
  )
}

export default Login