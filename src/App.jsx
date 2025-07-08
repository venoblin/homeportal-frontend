import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  
  return (
    <div className='App'>
      <nav>
        <Link to='/'>HomePortal</Link>

        {location.pathname !== '/app/new' && (
          <button onClick={() => {navigate('/app/new')}}>Add App</button>
        )}
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/app/new' element={<NewAppRoute />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
