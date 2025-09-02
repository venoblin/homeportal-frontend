import './Panel.css'

const Panel = (props) => {
  return (
    <div className='Panel'>
      {props.children}
    </div>
  )
}

export default Panel
