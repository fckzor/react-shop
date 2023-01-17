import { useEffect, useContext } from "react"
import { ShopContext } from '../context'
import { API_KEY, API_URL } from "../config"
import axios from "axios"
import { GoodsList } from "./GoodsList"
import { Preloader } from "./Preloader"
import { Cart } from "./Cart"
import { BasketList } from "./BasketList"
import { Alert } from "./Alert"

export function Shop() {
  const {
    setGoods,
    loading,
    isBasketShow,
    alertName,
  } = useContext(ShopContext)

  const fetchGoods = async () => {
    try {
      const { data } = await axios.get(API_URL, {headers: {Authorization: API_KEY}})
      if (!data?.shop) {
        throw new Error('no data')
      }

      setGoods(data.shop)
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchGoods()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div className="content">
        <Cart />
        
        <h2>Shop</h2>
        {loading ? <Preloader /> : <GoodsList />}
        {isBasketShow && <BasketList />}
        {alertName && <Alert />}
      </div>
    </div>
  )
}
