import {useContext}  from 'react'
import {ShopContext} from '../context'

export function BasketItem(props) {
  const {
    id, 
    title, 
    price, 
    quantity,
  } = props

  const {
    removeFromBasket,
    increementQuantity,
    decreementQuantity,
  } = useContext(ShopContext)

  return (
    <li className="collection-item">
      {title} 
      <span 
        className="basket-quantity"
        onClick={() => decreementQuantity(id)}
      >
        <i className="material-icons">remove</i>
      </span>
      x{quantity}
      <span 
        className="basket-quantity"
        onClick={() => increementQuantity(id)}
      >
        <i className="material-icons">add</i>
      </span>
      = {price * quantity} ₽
      
      <span 
        className="secondary-content basket-delete"
        onClick={() => removeFromBasket(id)}
      >
        <i className="material-icons">close</i>
      </span>
    </li>
  )
}