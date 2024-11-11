import { useState } from 'react'
const SignUp = ({ token, setToken }) => {
  const handleSubmit = async (event) =>{
    event.preventDefault()
    try {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`, 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  firstname: name,
                  lastname: lastName,
                  email: email,
                  password: password
                }) 
              })
      const result = await response.json()
      token = result.token
      console.log(result.message)
      setToken(token)

    } catch (error) {
      setError(error.message)
    }
  }
  const [name, setName] = useState(``)
  const [lastName, setLastName] = useState(``)
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)
  const [error, setError] = useState(null)
  return (
    <>
      <>
      <form>
        <label>
          Last Name <input value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </label>
        <label>
          First Name <input value={name} onChange={(event) => setName(event.target.value)}/>
        </label>
        <label>
          Email <input value={email} onChange={(event) => setEmail(event.target.value)}/>
        </label>
        <label>
          Password <input value={password} onChange={(event) => setPassword(event.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </>
    </>
  )
}
export default SignUp