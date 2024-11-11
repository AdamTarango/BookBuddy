const Checkout = ({ token} ) => {
  return (
    <>
      { token && book.available ? <p>Checkout</p> : <p></p> }
    </>
  )
}
export default Checkout