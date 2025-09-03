import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import ServerInfo from '../../ServerInfo/ServerInfo'
import AppCard from '../../AppCard/AppCard'
import Panel from '../../ui/Panel/Panel'
import './HomeRoute.css'

const HomeRoute = () => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()
  
  return (
    <div className='HomeRoute'>
      <h1>Dashboard</h1>

      <Panel className='host'>
        <h2>Host</h2>
        <ServerInfo />
        <Link to='/host'>View More →</Link>
      </Panel>
      
      <Panel className='apps-container'>
        <div className='header'>
          <h2>Apps</h2>
          <button onClick={() => {navigate('/new')}}>Add App</button>
        </div>

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
      </Panel>
    </div>
  )
}

export default HomeRoute
