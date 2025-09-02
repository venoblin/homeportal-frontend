import { Routes, Route, Link } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'
import AtomRoute from './components/routes/AtomRoute/AtomRoute'

function App() {
  
  return (
    <div className='App'>
      <nav>
        <div className='links-wrap'>
          <Link to='/'>Dashboard</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/new' element={<NewAppRoute />} />
          <Route path='/atom' element={<AtomRoute />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
