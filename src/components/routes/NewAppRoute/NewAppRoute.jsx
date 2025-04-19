import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import { postApp } from '../../../services/app'
import AppForm from '../../AppForm/AppForm'
import './NewAppRoute.css'

const NewAppRoute = (props) => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const onSubmit = async (formState) => {
    const res = await hpContext.load(() => postApp(formState))
    props.setApps(currState => [...currState, res.data.app])
    navigate('/')
  }
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <AppForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewAppRoute
