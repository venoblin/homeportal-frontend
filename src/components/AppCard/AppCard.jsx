import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { patchApp } from '../../services/app'
import AppForm from '../AppForm/AppForm'
import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  const hpContext = useContext(AppContext)
  const [isHovering, setIsHovering] = useState(true)
  const navigate = useNavigate()

  const onSubmit = async (formState) => {
    const res = await hpContext.load(() => patchApp(props.app.id, formState))
    hpContext.setApps(currState => currState[props.app.idx] = {...currState[props.app.idx], ...res.data.app})
    navigate('/')
  }

  const showEditMenu = () => {
    hpContext.showPopup(
      <AppForm app={props.app} onSubmit={onSubmit} />
    )
  }
  
  return (
    <div className='AppCard'>
      {!hpContext.isPopup &&
        <button 
          className={isHovering ? 'edit show' : 'edit'}
          onClick={showEditMenu}
        >Edit</button>
      }
      
      
      <a href={props.app.url} target='blank' className='app'>
        <p className='name'>{props.app.name}</p>
        <img src={defaultLogo} />
      </a>
    </div>
  )
}

export default AppCard