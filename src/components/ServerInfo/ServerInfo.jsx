import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerInfo.css'

const ServerInfo = (props) => {
  const hpContext = useContext(AppContext)
  const info = hpContext.hostInfo

  return (
    <div className='ServerInfo'>
      <div className='machine'>
        <p><span>Hostname:</span> {info.machine?.staticHostname}</p>
        <p><span>OS:</span> {info.machine?.operatingSystem}</p>
        <p><span>Kernel:</span> {info.machine?.kernel}</p>
        {props.isFull && 
          <p><span>Motherboard:</span> {`${info.machine?.hardwareVendor} ${info.machine?.hardwareModel}`}</p>
        }
        <p><span>CPU:</span> {`${info.cpu?.modelName} ${info.cpu?.cores}-Core, ${info.cpu?.threads}-Thread`}</p>
        <p><span>Uptime:</span> {info.machine?.uptime}</p>
      </div>
    </div>
  )
}

export default ServerInfo
