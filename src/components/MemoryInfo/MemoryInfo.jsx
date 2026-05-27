import './MemoryInfo.css'

const MemoryInfo = (props) => {
  return (
    <div className='MemoryInfo'>
      <p>{props.type}</p>
      <p>{props.memory?.total}</p>
      <p>{props.memory?.used}</p>
      <p>{props.memory?.free}</p>
      <p>{props.memory?.shared || ''}</p>
      <p>{props.memory?.buffcache || ''}</p>
      <p>{props.memory?.available || ''}</p>
    </div>
  )
}

export default MemoryInfo
