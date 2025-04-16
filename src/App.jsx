import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { getAllApps } from './services/app'
import { AppContext } from './contexts/AppContext'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'

function App() {
  const hpContext = useContext(AppContext)
  const [apps, setApps] = useState([])
  const location = useLocation()
  
  const getApps = async () => {
    const apps = await hpContext.load(getAllApps)
    setApps(apps)
  }

  useEffect(() => {
    getApps()
  }, [])

  return (
    <div className='App'>
      <nav>
        <Link to='/'>HomePortal</Link>

        <div className='links'>
          {location.pathname !== '/new' && apps.length > 0 && 
            <Link to='/new'>Add App</Link>
          }
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<HomeRoute apps={apps} />} />
        <Route path='/new' element={<NewAppRoute />} />
      </Routes>
    </div>
  )
}

export default App
