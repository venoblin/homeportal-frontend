import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeleteApp, GetAllApps, GetHostInfo, PostApp } from '../services/app'
import './AppContext.css'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [apps, setApps] = useState([])
  const [hostInfo, setHostInfo] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isPopup, setIsPopup] = useState(false)
  const [popupComponent, setPopupComponent] = useState(<p></p>)
  const [popupBtnText, setPopupBtnText] = useState('Ok')
  const navigate = useNavigate()

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

  const showPopup = ({component, btnText}) => {
    document.body.style.overflow = 'hidden'
    if (btnText) {
      setPopupBtnText(btnText)
    } else {
      setPopupBtnText('Ok')
    }
    
    setPopupComponent(component)
    setIsPopup(currState => !currState)
  }

  const dismissPopup = () => {
    document.body.style.overflow = 'initial'
    setPopupComponent(<p></p>)
    setIsPopup(currState => !currState)
  }

  const getApps = async () => {
    const apps = await load(GetAllApps)

    if (apps) setApps([...apps])
  }

  const getHostInfo = async () => {
    const info = await load(GetHostInfo)
    info.uptime = info.uptime.replace('up ', '')

    if (info) setHostInfo({...info})
  }

  const updateApp = (idx, update) => {
    try {
      const newApp = {...apps[idx], ...update}
      const updatedApps = [...apps]
      updatedApps[idx] = newApp

      setApps(updatedApps)
      dismissPopup()
    } catch (err) {
      showPopup({component: <p>{err.message}</p>})
    }
  }

  const postApp = async (formState) => {
    try {
      const res = await load(() => PostApp(formState))
      setApps(currState => [...currState, {
        ...res.data.app, 
        idx: apps.length
      }])
      navigate('/')
    } catch (err) {
      showPopup({component: <p>{err.message}</p>})
    }
  }

  const deleteApp = async (app) => {
    try {
      await load(() => DeleteApp(app.id))
      const updatedApps = [...apps]
      updatedApps.splice(app.idx, 1)

      setApps(updatedApps)
      dismissPopup()
    } catch (err) {
      showPopup({component: <p>{err.message}</p>})
    }
  }

  useEffect(() => {
    getApps()
    getHostInfo()
  }, [])

  const values = {
    hostInfo,
    apps,
    setApps,
    load,
    isPopup,
    showPopup,
    postApp,
    deleteApp,
    updateApp
  }

  return (
    <AppContext.Provider value={values}>
      {props.children}

      {isLoading &&
        <div className='loader'>
          <span></span>
        </div>
      }
      
      {isPopup && 
        <div className='pop-up'>
          {popupComponent}
          <button className='close' onClick={dismissPopup}>{popupBtnText}</button>
        </div>
      }
    </AppContext.Provider>
  )
}