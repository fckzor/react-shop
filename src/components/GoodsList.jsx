import { GoodsItem } from "./GoodsItem"

export function GoodsList({goods = [], addToBasket = Function.prototype}) {
  return (
    <div className="goods">
      {
        goods && goods.length 
          ? goods.map(item => ( 
            <GoodsItem 
              key={item.mainId} 
              {...item}
              addToBasket={addToBasket}
            /> 
          ))
          : <h3>Nothing found</h3>
      }
    </div>
  )
}