import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isLoading, toggleIsLoading] = useState(false)

  const load = () => {

  }

  return (
    <AppContext.Provider value={load}>
      { props.children }
    </AppContext.Provider>
  )
}