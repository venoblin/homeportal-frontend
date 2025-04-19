import { createContext, useEffect, useState } from 'react'
import { getAllApps } from '../services/app'
import './AppContext.css'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [apps, setApps] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isPopup, setIsPopup] = useState(false)
  const [popupComponent, setPopupComponent] = useState(<p></p>)

  const load = (promise) => {
    setIsLoading(currState => !currState)
    
    return promise().then((res) => {
      setIsLoading(currState => !currState)

      return res
    }).catch((err) => {
      setIsLoading(currState => !currState)

      showPopup(<p>{err.message}</p>)
    })
  }

  const showPopup = (component, callback) => {
    setPopupComponent(component)
    if (callback) callback()
    setIsPopup(currState => !currState)
  }

  const dismissPopup = () => {
    setPopupComponent(<p></p>)
    setIsPopup(currState => !currState)
  }

  const getApps = async () => {
    const apps = await load(getAllApps)
    setApps(apps)
  }

  useEffect(() => {
    getApps()
  }, [])

  const values = {
    apps,
    setApps,
    load,
    showPopup
  }

  return (
    <AppContext.Provider value={values}>
      {props.children}

      {isLoading &&
        <span className="loader"></span>
      }
      
      {isPopup && 
        <div className='pop-up'>
          {popupComponent}
          <button onClick={dismissPopup}>Ok</button>
        </div>
      }
    </AppContext.Provider>
  )
}