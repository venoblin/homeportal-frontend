import { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const load = () => {
    setIsLoading(!isLoading)

    return promise.then((res) => {
      setIsLoading(!isLoading)

      return res
    }).catch(() => {
      setIsLoading(!isLoading)

      throw new Error()
    })
  }

  const showErrorMsg = (msg) => {
    setErrorMessage(msg)
    setIsError(!isError)
  }

  const dismissErrorMsg = () => {
    setErrorMessage(!Error)
  }

  return (
    <AppContext.Provider value={load}>
      { props.children }

      {isLoading &&
        <span class="loader"></span>
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