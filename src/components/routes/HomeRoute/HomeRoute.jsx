import { Link } from 'react-router-dom'
import './HomeRoute.css'

const HomeRoute = (props) => {
  return (
    <div className='HomeRoute'>
      <h2>Dashboard</h2>

      {props.apps.length ? (
        <p>Apps</p>
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
