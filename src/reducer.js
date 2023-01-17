export function reducer(state, {type, payload}) {
  switch(type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }

    case 'RESET_ALERT':
      return {
        ...state,
        alertName: '',
      }

    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)
      
      let newOrder

      if (itemIndex < 0) {
        // Если в заказах (order) нет выбранного заказа - создаем
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem]
      } else {
        newOrder = state.order.map((orderItem, index) => 
          index === itemIndex 
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.title,
      }
    }

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(item => item.id !== payload.id),
      }

    case 'INCREEMENT_QUANTITY': {
      const newOrder = state.order.map(item => (
        item.id === payload.id
          ? {...item, quantity: item.quantity + 1}
          : item
      ))

      return {
        ...state,
        order: newOrder,
      }
    }

    case 'DECREEMENT_QUANTITY': {
      const newOrder = state.order.map(item => {
        const quantity = item.quantity - 1
  
        return item.id === payload.id
          ? {...item, quantity: quantity > 1 ? quantity : 1}
          : item
  
      })

      return {
        ...state,
        order: newOrder,
      }
    }

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }

    default:
      return state
  }
}