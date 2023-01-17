import { BasketItem } from "./BasketItem"

export function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    handleBasketDeleteItem = Function.prototype,
    increementQuantity = Function.prototype,
    decreementmQuantity = Function.prototype,
  } = props

  const totalPrice = order.reduce((sum, el) => (sum + el.price * el.quantity), 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина покупок 
        <span className="secondary-content basket-close" onClick={handleBasketShow}>
          <i className="material-icons">close</i>
        </span>
      </li>

      {
        order.length 
          ? order.map(item => (
            <BasketItem
              key={item.id}
              {...item}
              handleBasketDeleteItem={handleBasketDeleteItem}
              increementQuantity={increementQuantity}
              decreementmQuantity={decreementmQuantity}
            />
          ))
          : <li className="collection-item">Корзина пуста</li>
      }
      <li className="collection-item active">Итоговая стоимость: {totalPrice} ₽</li>
    </ul>
  )
}