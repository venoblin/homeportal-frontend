import { useState } from 'react'
import './AppForm.css'

const AppForm = (props) => {
  const emptyState = {
    name: '',
    url: '',
    image_path: ''
  }
  const [formState, setFormState] = useState(emptyState)

  const onChangeListener = (evt) => {
    const target = evt.target
    setFormState({ ...formState, [target.name]: target.value })
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    
    if (props.onSubmit) await props.onSubmit()
    
    setFormState(emptyState)
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input 
        id='name'
        name='name'
        type='text'
        value={formState.name}
        required
        onChange={onChangeListener}
      />
      
      <label htmlFor='url'>Url</label>
      <input 
        id='url'
        name='url'
        type='text'
        value={formState.url}
        required
        onChange={onChangeListener}
      />
      
      <label htmlFor='image_path'>Image Path</label>
      <input 
        id='image_path'
        name='image_path'
        type='text'
        value={formState.image_path}
        onChange={onChangeListener}
      />
      
      <button type='submit'>Add</button>
    </form>
  )
}

export default AppForm