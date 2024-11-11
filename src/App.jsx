import { useState } from 'react'
import { useEffect } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Books from './components/Books'
import LoginBar from './components/LoginBar'

function App() {
  const makeLogin = () => {
    return <LoginBar token={token} key={setToken}/>
  }
  const getBooks = async () => {
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`)
    const responseJson =await response.json()
    const data = responseJson.books
    setBooks(data)

  }
  const [token, setToken] = useState(null)
  const [books, setBooks] = useState([])
  useEffect(()=> {getBooks()}, [])
  return (
    <>
      <LoginBar token={token} setToken={setToken}/>
      <Books books={books} token={token} />
    </>
  )
}

export default App
