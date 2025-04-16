import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  return (
    <a href={props.app.url} target='blank' className='AppCard'>
      <p className='name'>{props.app.name}</p>
      <img src={defaultLogo} />
    </a>
  )
}

export default AppCard