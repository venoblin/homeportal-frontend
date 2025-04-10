import { Router, Route } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import './styles/App.css'

function App() {

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
