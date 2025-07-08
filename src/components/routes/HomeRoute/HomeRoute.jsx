import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import AppCard from '../../AppCard/AppCard'
import './HomeRoute.css'

const HomeRoute = () => {
  const hpContext = useContext(AppContext)
  
  return (
    <div className='HomeRoute'>
      
      {hpContext.apps.length ? (
        <div className='apps-container'>

          <div className='apps'>
            {hpContext.apps.map((app, idx) => (
              <AppCard key={app.id} app={{...app, idx:idx}} />
            ))}
          </div>
        </div>
        
      ) : (
        <div>
          <p>No apps!</p>
        </div>
      )}
    </div>
  )
}

export default HomeRoute
