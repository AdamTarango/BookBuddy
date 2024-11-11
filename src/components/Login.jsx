import { useEffect } from 'react'
import { useState } from 'react'
const Login = ({ token, setToken }) =>{
  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`, 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  email: email, 
                  password: password 
                }) 
              })
      const result = await response.json()
      console.log(result.message)
      setToken(result.token)

    } catch (error) {
      setError(error.message)
    }
  }
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [error, setError] = useState(null)
  
  return (
    <>
      <form>
        <label>
          Email <input value={email} onChange={(event) => setEmail(event.target.value)}/>
          </label>
        <label>
          Password <input value={password} onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Sign in</button>
      </form>
    </>
  )
}
export default Login