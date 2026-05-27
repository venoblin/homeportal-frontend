import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerInfo.css'
import StorageMount from '../StorageMount/StorageMount'

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

          <div className='storage-table'>
            <div className='storage-header'>
              <p>Filesystem</p>
              <p>Size</p>
              <p>Used</p>
              <p>Available</p>
              <p>Use %</p>
              <p>Mount</p>
            </div>
        
            {info.storage?.map((mount, index) =>
              (props.isFull ? (
                <StorageMount key={`${mount.filesystem}_${index}`} mount={mount} />
              ) : (
                (mount.filesystem === 'mergerfsPool' && 
                  <StorageMount key={`${mount.filesystem}_${index}`} mount={mount} />
                )
              )
            )
          )}
          </div>
        </div>
      }
    </div>
  )
}

export default ServerInfo
