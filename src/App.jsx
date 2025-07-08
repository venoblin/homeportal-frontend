import { Routes, Route, Link } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'

function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/'>HomePortal</Link>

        <Link className='btn' to='/app/new'>Add App</Link>
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
