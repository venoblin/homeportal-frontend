import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import AppForm from '../../AppForm/AppForm'
import './NewAppRoute.css'

const NewAppRoute = () => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const cancelHandler = () => {
    navigate('/')
  }
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <AppForm onSubmit={(formState => hpContext.postApp(formState))} />

      <button onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default NewAppRoute
