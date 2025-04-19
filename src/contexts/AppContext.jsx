import { createContext, useState } from 'react'
import './AppContext.css'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isPopup, setIsPopup] = useState(false)
  const [popupMsg, setPopupMsg] = useState('')

  const load = (promise) => {
    setIsLoading(currState => !currState)
    
    return promise().then((res) => {
      setIsLoading(currState => !currState)

      return res
    }).catch((err) => {
      setIsLoading(currState => !currState)

      showPopup(err.message)
    })
  }

  const showPopup = (msg) => {
    setPopupMsg(msg)
    setIsPopup(!isPopup)
  }

  const dismissPopup = () => {
    setPopupMsg('')
    setPopupMsg(!isPopup)
  }

  const values = {
    load,
    showPopup
  }

  return (
    <AppContext.Provider value={values}>
      { props.children }

      {isLoading &&
        <span className="loader"></span>
      }
      
      {isPopup && 
        <div className='pop-up'>
          <p>{ popupMsg }</p>
          <button onClick={dismissPopup}>Ok</button>
        </div>
      }
    </AppContext.Provider>
  )
}