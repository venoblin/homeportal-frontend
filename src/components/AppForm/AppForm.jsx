import { useState } from 'react'
import { deleteApp } from '../../services/app'
import './AppForm.css'

const AppForm = (props) => {
  let emptyState = {
    name: '',
    url: '',
    image_path: ''
  }
  if (props.app) {
    emptyState = {
      name: props.app.name,
      url: props.app.url,
      image_path: props.app.image_path
    }
  }
  const [formState, setFormState] = useState(emptyState)

  const onChangeListener = (evt) => {
    const target = evt.target
    setFormState({ ...formState, [target.name]: target.value })
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    
    if (props.onSubmit) await props.onSubmit(formState)
    
    setFormState(emptyState)
  }

  const deleteHandler = async (id) => {
    const res = await deleteApp(id)
    console.log(res)
  }

  return (
    <form className='AppForm' onSubmit={onSubmit}>
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
      
      <div className='buttons-container'>
        <button type='submit'>{props.app ? 'Edit' : 'Add'}</button>
        {props.app && (
          <button type='button' onClick={() => deleteHandler(props.app.id)}>Delete</button>
        )}
      </div>
    </form>
  )
}

export default AppForm