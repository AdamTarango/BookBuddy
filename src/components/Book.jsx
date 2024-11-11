import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Book = ({ book }) => {
  return(
    <>
        <h2>{book.title}</h2>
        <h3>by {book.author}</h3>
        <Link to={'/'+book.id}>Details</Link>
      
    </>
  )
}
export default Book