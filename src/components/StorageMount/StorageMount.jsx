import './StorageMount.css'

const StorageMount = (props) => {
  return (
    <div className='StorageMount'>
      <p>{props.mount.filesystem}</p>
      <p>{props.mount.size}</p>
      <p>{props.mount.used}</p>
      <p>{props.mount.avail}</p>
      <p>{props.mount.usePct}</p>
      <p>{props.mount.mounted}</p>
    </div>
  )
}

export default StorageMount
