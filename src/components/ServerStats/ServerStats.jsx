import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerStats.css'

const ServerStats = () => {
  const hpContext = useContext(AppContext)
  
  return (
    <div className='ServerStats'>
      <h3>Host</h3>
      <p>{hpContext.hostStats.host}</p>
      <p>{hpContext.hostStats.uptime}</p>
    </div>
  )
}

export default ServerStats
