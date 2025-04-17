import { useState } from 'react'
import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  const [isEditing, setIsEditing] = useState(true)
  
  return (
    <div className='AppCard'>
      <button className={isEditing ? 'edit show' : 'edit'}>Edit</button>
      
      <a href={props.app.url} target='blank' className='app'>
        <p className='name'>{props.app.name}</p>
        <img src={defaultLogo} />
      </a>
    </div>
  )
}

export default AppCard