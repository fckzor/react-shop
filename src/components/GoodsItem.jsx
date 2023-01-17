export function GoodsItem(props) {
  const {
    displayName: title,
    mainId: id,
    displayAssets: [ image ],
    displayDescription: description,
    price: { finalPrice: price },
    addToBasket,
  } = props
  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={image.full_background} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        {description && <p>{description}</p>}
      </div>
      <div className="card-action">
        <button 
          className="btn"
          onClick={() => addToBasket({
            id,
            title,
            price,
          })}
        >
          Купить
        </button>
        <span className="right card-price">{price} ₽</span>
      </div>
    </div>
  )
}