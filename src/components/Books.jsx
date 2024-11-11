import Book from "./book"
import BookDetails from "./BookDetails"
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
const Books = ({ books, token }) => {
  const reader = (book) => {
    return (
      <Routes key={book.id}>
        <Route path='/' element={<Book book={book} key={book.id} />} />
        <Route path={'/'+book.id} element={<BookDetails book={book} key={book.id} token={token} />} />
      </Routes>
    )
  }
  return (
    <>
      
      
      {books.map(reader)}
    </>
  )
}
export default Books