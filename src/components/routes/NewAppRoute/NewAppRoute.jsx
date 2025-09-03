import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import AppForm from '../../AppForm/AppForm'
import Panel from '../../ui/Panel/Panel'
import './NewAppRoute.css'

const NewAppRoute = () => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const cancelHandler = () => {
    navigate('/')
  }
  
  return (
    <div className='NewAppRoute'>
      <h1>Add Application</h1>

      <Panel>
        <AppForm onSubmit={(formState => hpContext.postApp(formState))} onCancel={cancelHandler} />
      </Panel>
    </div>
  )
}

export default NewAppRoute
