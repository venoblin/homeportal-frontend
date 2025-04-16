import { Link } from 'react-router-dom'
import AppCard from '../../AppCard/AppCard'
import './HomeRoute.css'

const HomeRoute = (props) => {
  return (
    <div className='HomeRoute'>
      <h2>Dashboard</h2>

      {props.apps.length ? (
        <div className='apps'>
          {props.apps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
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
