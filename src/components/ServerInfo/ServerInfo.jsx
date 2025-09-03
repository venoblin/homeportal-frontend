import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import Panel from '../ui/Panel/Panel'
import './ServerInfo.css'

const ServerInfo = () => {
  const hpContext = useContext(AppContext)
  const info = hpContext.hostInfo
  
  return (
    <Panel className='ServerInfo'>
      <h2>Host</h2>
      <p>Hostname: {info.staticHostname}</p>
      <p>OS: {info.operatingSystem}</p>
      <p>Kernel: {info.kernel}</p>
      <p>Motherboard: {`${info.hardwareVendor} ${info.hardwareModel}`}</p>
      <p>CPU: {`${info.modelName} ${info['core(s)PerSocket']}-Core, ${info['cpu(s)']}-Thread`}</p>
      <p>Uptime: {info.uptime}</p>
    </Panel>
  )
}

export default ServerInfo
