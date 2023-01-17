export function BasketItem(props) {
  const {
    id, 
    title, 
    price, 
    quantity, 
    handleBasketDeleteItem = Function.prototype,
    increementQuantity = Function.prototype,
    decreementmQuantity = Function.prototype,
  } = props

  return (
    <li className="collection-item">
      {title} 
      <span 
        className="basket-quantity"
        onClick={() => decreementmQuantity(id)}
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
        onClick={() => handleBasketDeleteItem(id)}
      >
        <i className="material-icons">close</i>
      </span>
    </li>
  )
}