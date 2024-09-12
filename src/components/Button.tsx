import * as React from "react"
import { ReactNode } from "react"

type PropTypes = {
    children: ReactNode
}

const Button = ({children}: PropTypes) => {
  return (
   <button>
    {children}
   </button>
  )
}

export {
    Button
}