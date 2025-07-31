import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerInfo.css'

const ServerInfo = () => {
  const hpContext = useContext(AppContext)
  const hostInfo = hpContext.hostInfo
  
  return (
    <div className='ServerInfo'>
      <h3>Host</h3>
      <p>Hostname: {hpContext.hostInfo.staticHostname}</p>
      <p>OS: {hpContext.hostInfo.operatingSystem}</p>
      <p>Kernel: {hpContext.hostInfo.kernel}</p>
      <p>Motherboard: {`${hpContext.hostInfo.hardwareVendor} ${hpContext.hostInfo.hardwareModel}`}</p>
      <p>CPU: </p>
      <p>Uptime: {hpContext.hostInfo.uptime}</p>
    </div>
  )
}

export default ServerInfo
