import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import AppCard from '../../AppCard/AppCard'
import './HomeRoute.css'

const HomeRoute = () => {
  const hpContext = useContext(AppContext)
  
  return (
    <div className='HomeRoute'>
      <h2>Dashboard</h2>

      {hpContext.apps.length ? (
        <div className='apps-container'>
          <div className='links'>
            <Link to='/new'>Add App</Link>
          </div>

          <div className='apps'>
            {hpContext.apps.map((app, idx) => (
              <AppCard key={app.id} app={{...app, idx:idx}} />
            ))}
          </div>
        </div>
        
      ) : (
        <div>
          <p>No apps!</p>
          <Link to='/new'>Add App</Link>
        </div>
      )}
    </div>
  )
}

export default HomeRoute
