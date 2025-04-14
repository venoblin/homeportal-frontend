import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllApps } from './services/app'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import './styles/App.css'

function App() {
  const [apps, setApps] = useState([])
  
  const getApps = async () => {
    const apps = await getAllApps()
    console.log('hi')
    setApps(apps)
  }

  useEffect(() => {
    // getApps()
  })

  return (
    <div className='App'>
      <nav>
        <p>HomePortal</p>
      </nav>

      <Routes>
        <Route path='/' element={<HomeRoute />} />
      </Routes>
    </div>
  )
}

export default App
