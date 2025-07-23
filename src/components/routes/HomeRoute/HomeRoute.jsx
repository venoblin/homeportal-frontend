import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import AppCard from '../../AppCard/AppCard'
import './HomeRoute.css'

const HomeRoute = () => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()
  
  return (
    <div className='HomeRoute'>
      
      <div className='apps-container'>
        <button onClick={() => {navigate('/new')}}>Add App</button>

        {hpContext.apps.length ? (

            <div className='apps'>
              {hpContext.apps.map((app, idx) => (
                <AppCard key={app.id} app={{...app, idx:idx}} />
              ))}
            </div>
          
        ) : (
          <div>
            <p>No apps!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeRoute
