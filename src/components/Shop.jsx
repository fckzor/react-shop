import React, { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import axios from "axios"
import { GoodsList } from "./GoodsList"
import { Preloader } from "./Preloader"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"


export function Shop() {
  const [goods, setGoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false)
  const [alertName, setAlertName] = useState('')

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
    
    if (itemIndex < 0) {
      // Если в заказах (order) нет выбранного заказа - создаем
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => 
        index === itemIndex 
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      )
      setOrder(newOrder)
    }

    setAlertName(item.title)
  }

  const handleBasketShow = () => setBasketShow(!isBasketShow)

  const increementQuantity = (id) => {
    const newOrder = order.map(item => (
      item.id === id
        ? {...item, quantity: item.quantity + 1}
        : item
    ))
    setOrder(newOrder)
  }
  const decreementmQuantity = (id) => {
    const newOrder = order.map(item => {
      const quantity = item.quantity - 1

      return item.id === id
        ? {...item, quantity: quantity > 1 ? quantity : 1}
        : item

    })
    setOrder(newOrder)
  }

  const handleBasketDeleteItem = (id) => {
    const newOrder = order.filter(item => item.id !== id)
    setOrder(newOrder)
  }
  const resetAlert = () => setAlertName('')

  const fetchGoods = async () => {
    try {
      const { data } = await axios.get(API_URL, {headers: {Authorization: API_KEY}})
      if (!data?.shop) {
        throw new Error('no data')
      }

      setGoods(data.shop)
    } catch(e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGoods()
  }, [])

  return (
    <div className="container">
      <div className="content">
        <Cart 
          quantity={order.length} 
          handleBasketShow={handleBasketShow}
        />
        
        <h2>Shop</h2>
        {
          loading
            ? <Preloader />
            : <GoodsList 
                goods={goods}
                addToBasket={addToBasket}
              />
        }
        
        {
          isBasketShow && 
          <BasketList 
            order={order}
            handleBasketShow={handleBasketShow}
            handleBasketDeleteItem={handleBasketDeleteItem}
            increementQuantity={increementQuantity}
            decreementmQuantity={decreementmQuantity}
          />
        }

        {alertName && <Alert name={alertName} resetAlert={resetAlert} />}
      </div>
    </div>
  )
}
