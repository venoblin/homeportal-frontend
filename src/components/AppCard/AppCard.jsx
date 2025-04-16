import './AppCard.css'

const AppCard = (props) => {
  return (
    <div className='AppCard'>
      <p className='name'>{props.app.name}</p>
      <a href={props.app.url} target='blank'>View</a>
      <p>{props.app.image_path}</p>
    </div>
  )
}

export default AppCard