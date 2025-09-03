import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { PatchApp } from '../../services/app'
import AppForm from '../AppForm/AppForm'
import Card from '../ui/Card/Card'
import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const patchHandler = async (formState) => {
    const res = await hpContext.load(() => PatchApp(props.app.id, formState))
    hpContext.updateApp(props.app.idx, res.data.app)
    navigate('/')
  }

  const showEditMenu = () => {
    hpContext.showPopup({
      component: <AppForm app={props.app} onSubmit={patchHandler} />,
      btnText: 'Cancel'
    })
  }
  
  return (
    <div className='AppCard'>
      <button 
        className='edit'
        onClick={showEditMenu}
      >Edit</button>

      <Card>
        <a href={props.app.url} target='blank' className='app'>
          <p className='name'>{props.app.name}</p>
          <img src={defaultLogo} />
        </a>
      </Card>
    </div>
  )
}

export default AppCard