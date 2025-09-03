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
      <p><span>Hostname:</span> {info.staticHostname}</p>
      <p><span>OS:</span> {info.operatingSystem}</p>
      <p><span>Kernel:</span> {info.kernel}</p>
      <p><span>Motherboard:</span> {`${info.hardwareVendor} ${info.hardwareModel}`}</p>
      <p><span>CPU:</span> {`${info.modelName} ${info['core(s)PerSocket']}-Core, ${info['cpu(s)']}-Thread`}</p>
      <p><span>Uptime:</span> {info.uptime}</p>
    </Panel>
  )
}

export default ServerInfo
