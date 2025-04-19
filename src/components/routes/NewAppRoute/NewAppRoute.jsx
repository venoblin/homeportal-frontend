import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'
import { postApp } from '../../../services/app'
import AppForm from '../../AppForm/AppForm'
import './NewAppRoute.css'

const NewAppRoute = (props) => {
  const hpContext = useContext(AppContext)
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <AppForm />
    </div>
  )
}

export default NewAppRoute
