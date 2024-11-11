import { useState } from 'react'
import { useEffect } from 'react'
const Profile = ({ token, setToken }) =>{
  const logout = (event) =>{
    event.preventDefault()
    setToken(null)
  }

  const getProfile = async () =>{
    const user = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      }, 
    })
    const userInfo = await user.json()
    console.log(userInfo)
    setName(userInfo)

  }

  useEffect(() =>{getProfile()}, [token])
  const [name, setName] =useState({})
  return (
    <>
      <p>Hi {name.firstname} {name.lastname}! {name.email}</p>
      <button onClick={logout}>logout</button>
    </>
  )
}
export default Profile