import { Router, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllApps } from './services/app'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import './styles/App.css'

function App() {
  const [apps, setApps] = useState([])
  
  const getApps = async () => {
    const apps = await getAllApps()
    setApps(apps)
  }

  useEffect(() => {
    getApps()
    console.log(apps)
  })

  return (
    <div className='App'>
      <nav>
        <p>HomePortal</p>
      </nav>

      <Router>
        <Route path='/' element={<HomeRoute />} />
      </Router>
    </div>
  )
}

export default App
