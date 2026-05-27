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

      {info.storage && info.storage?.length > 0 &&
        <div className='storage'>
          <p><span>Storage:</span></p>
            {info.storage?.map((s, index) =>
              (props.isFull ? (
                <div key={`${s.filesystem}_${index}`} className='mount'>
                  <p>{s.filesystem}</p>
                  <p>{s.size}</p>
                  <p>{s.used}</p>
                  <p>{s.avail}</p>
                  <p>{s.usePct}</p>
                  <p>{s.mounted}</p>
                </div>
                ) : (
                  (s.filesystem === 'mergerfsPool' && 
                    <div key={`${s.filesystem}_${index}`} className='mount'>
                      <p>{s.filesystem}</p>
                      <p>{s.size}</p>
                      <p>{s.used}</p>
                      <p>{s.avail}</p>
                      <p>{s.usePct}</p>
                      <p>{s.mounted}</p>
                    </div>
                  )
                )
              )
            )}
        </div>
      }
    </div>
  )
}

export default ServerInfo
