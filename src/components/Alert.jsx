import { useEffect, useContext } from "react"
import { ShopContext } from '../context'

export function Alert() {
  const { alertName, resetAlert } = useContext(ShopContext)

  useEffect(() => {
    const timerId = setTimeout(resetAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [alertName])

  return (
    <div id="toast-container">
      <div className="toast">{alertName} добавлен в корзину</div>
    </div>
  )
}
