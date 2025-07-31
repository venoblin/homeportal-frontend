import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerStats.css'

const ServerStats = () => {
  const hpContext = useContext(AppContext)
  
  return (
    <div className='ServerStats'>
      <h3>Host</h3>
      <p>Hostname: {hpContext.hostInfo.staticHostname}</p>
      <p>Uptime: {hpContext.hostInfo.uptime}</p>
    </div>
  )
}

export default ServerStats
