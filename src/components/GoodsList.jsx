import { useContext } from "react"
import { ShopContext } from '../context'
import { GoodsItem } from "./GoodsItem"

export function GoodsList() {

  const { goods } = useContext(ShopContext)

  return (
    <div className="goods">
      {
        goods.length 
          ? goods.map(item => ( 
            <GoodsItem 
              key={item.mainId} 
              {...item}
            /> 
          ))
          : <h3>Nothing found</h3>
      }
    </div>
  )
}