import { useContext } from "react"
import { ShopContext } from '../context'

export function Cart() {
  const { 
    order,
    handleBasketShow 
  } = useContext(ShopContext)

  const quantity = order.length

  return (
    <div className="cart blue text-white" onClick={handleBasketShow}>
      <i className="material-icons text-white">shopping_cart</i>
      {quantity ? <span className="cart-quantity text-white">{quantity}</span> : null}
    </div>
  )
}