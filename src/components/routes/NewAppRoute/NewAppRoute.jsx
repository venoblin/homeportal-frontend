import { useState } from 'react'
import './NewAppRoute.css'

const NewAppRoute = () => {
  const [formState, setFormState] = useState({
    name: '',
    url: '',
    imagePath: ''
  })

  const onChangeListener = (evt) => {
    const target = evt.target
    setFormState({ ...formState, [target.id]: target.value })
  }
  
  return (
    <div className='NewAppRoute'>
      <h2>Add new application</h2>

      <form>
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
