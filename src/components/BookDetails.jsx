import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Checkout from './Checkout'

const BookDetails = ({ book, token }) => {
  return(
    <>
        <p>{book.description}</p>
        <img src={book.coverimage} alt={'Cover of '+book.title} height='200px'/>
        <Checkout />
        <Link to={'/'}>Close</Link>
      
    </>
  )
}
export default BookDetails