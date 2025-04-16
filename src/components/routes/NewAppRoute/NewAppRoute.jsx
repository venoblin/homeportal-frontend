import { useContext, useState } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import './NewAppRoute.css'
import { postApp } from '../../../services/app'

const NewAppRoute = () => {
  const hpContext = useContext(AppContext)
  const [formState, setFormState] = useState({
    name: '',
    url: '',
    imagePath: ''
  })

  const onChangeListener = (evt) => {
    const target = evt.target
    setFormState({ ...formState, [target.id]: target.value })
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    
    const app = await hpContext.load(() => postApp(formState))
    console.log(app)
  }
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
          id='name'
          name='name'
          type='text'
          value={formState.name}
          required
          onChange={(evt) => onChangeListener(evt)}
        />
        
        <label htmlFor='url'>Url</label>
        <input 
          id='url'
          name='url'
          type='text'
          value={formState.url}
          required
          onChange={(evt) => onChangeListener(evt)}
        />
        
        <label htmlFor='imagePath'>Image Path</label>
        <input 
          id='imagePath'
          name='image_path'
          type='text'
          value={formState.imagePath}
          onChange={(evt) => onChangeListener(evt)}
        />
        
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewAppRoute
