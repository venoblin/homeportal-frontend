import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllApps } from './services/app'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'

function App() {
  const [apps, setApps] = useState([])
  const location = useLocation()
  
  const getApps = async () => {
    const apps = await getAllApps()
    setApps(apps)
  }

  useEffect(() => {
    getApps()
    console.log()
  }, [])

  return (
    <div className='App'>
      <nav>
        <Link to='/'>HomePortal</Link>

        <div className='links'>

          {location.pathname !== '/new' && 
            <Link to='/new'>Add App</Link>
          }
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<HomeRoute />} />
        <Route path='/new' element={<NewAppRoute />} />
      </Routes>
    </div>
  )
}

export default App
