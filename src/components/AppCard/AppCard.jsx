import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  const hpContext = useContext(AppContext)
  const [isHovering, setIsHovering] = useState(true)

  const showEditMenu = () => {
    hpContext.showPopup(<p>Edit</p>, () => {
      
    })
  }
  
  return (
    <div className='AppCard'>
      <button 
        className={isHovering ? 'edit show' : 'edit'}
        onClick={showEditMenu}
      >Edit</button>
      
      <a href={props.app.url} target='blank' className='app'>
        <p className='name'>{props.app.name}</p>
        <img src={defaultLogo} />
      </a>
    </div>
  )
}

export default AppCard