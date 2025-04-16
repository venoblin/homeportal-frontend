import { createContext, useState } from 'react'
import './AppContext.css'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const load = (promise) => {
    setIsLoading(currState => !currState)
    
    return promise().then((res) => {
      setIsLoading(currState => !currState)

      return res
    }).catch((err) => {
      setIsLoading(currState => !currState)

      showErrorMsg(err.message)
    })
  }

  const showErrorMsg = (msg) => {
    setErrorMessage(msg)
    setIsError(!isError)
  }

  const dismissErrorMsg = () => {
    setErrorMessage('')
    setErrorMessage(!isError)
  }

  const values = {
    load,
    showErrorMsg,
    dismissErrorMsg
  }

  return (
    <AppContext.Provider value={values}>
      { props.children }

      {isLoading &&
        <span className="loader"></span>
      }
      
      {isError && 
        <div className='error-pop-up'>
          <p>{ errorMessage }</p>
          <button onClick={dismissErrorMsg}>Ok</button>
        </div>
      }
    </AppContext.Provider>
  )
}