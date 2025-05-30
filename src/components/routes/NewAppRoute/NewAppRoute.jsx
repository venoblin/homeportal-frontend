import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import { postApp } from '../../../services/app'
import AppForm from '../../AppForm/AppForm'
import './NewAppRoute.css'

const NewAppRoute = () => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmit = async (formState) => {
    const res = await hpContext.load(() => postApp(formState))
    hpContext.setApps(currState => [...currState, {
      ...res.data.app, 
      idx: hpContext.apps.length
    }])
    navigate('/')
  }

  const cancelHandler = () => {
    navigate('/')
  }
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <AppForm onSubmit={onSubmit} />

      <button onClick={cancelHandler}>Cancel</button>
    </div>
  )
}

export default NewAppRoute
