import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import './ServerInfo.css'
import StorageMount from '../StorageMount/StorageMount'
import MemoryInfo from '../MemoryInfo/MemoryInfo'

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

      <div className='memory'>
        <p><span>Memory:</span></p>

        <div className='memory-table'>
          <div className='memory-headers'>
            <p>Type</p>
            <p>Total</p>
            <p>Used</p>
            <p>Free</p>
            <p>Shared</p>
            <p>Cache</p>
            <p>Available</p>
          </div>

          <MemoryInfo type='RAM' memory={info.memory?.mem} />

          {props.isFull && <MemoryInfo type='SWAP' memory={info.memory?.swap} />}
        </div>
      </div>

      {info.storage && info.storage?.length > 0 &&
        <div className='storage'>
          <p><span>Storage:</span></p>

          <div className='storage-table'>
            <div className='storage-headers'>
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
