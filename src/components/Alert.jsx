import { useEffect } from "react"

export function Alert(props) {
  const { name, resetAlert } = props

  useEffect(() => {
    const timerId = setTimeout(resetAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
    // eslint-disable-next-line
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  )
}
