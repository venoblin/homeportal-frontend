import ServerInfo from '../../ServerInfo/ServerInfo'
import './HostRoute.css'

const HostRoute = () => {
  return (
    <div className='HostRoute'>
      <h1>Host</h1>
      <ServerInfo isFull={true} />
    </div>
  )
}

export default HostRoute
