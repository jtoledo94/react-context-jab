import { useState } from "react"
import Contexto from "./Contexto"

const ContextoProvider = ({ children }) => {
  const [color, setColor] = useState("silver") // ejemplo simple
  const [idioma, setIdioma]

  return (
    <Contexto.Provider value={{ color, setColor }}>
      {children}
    </Contexto.Provider>
  )
}

export default ContextoProvider
