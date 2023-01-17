export function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props

  return (
    <div className="cart blue text-white" onClick={handleBasketShow}>
      <i className="material-icons text-white">shopping_cart</i>
      {quantity ? <span className="cart-quantity text-white">{quantity}</span> : null}
    </div>
  )
}