import React, { createContext } from "react"

export const CustomContext = createContext()

const addToCart = (product) => {
  
}

const value = {

}

export function Context(props) {
  return (
    <CustomContext.Render value={value}>
      {props.children}
    </CustomContext.Render>
  )
}