import { useState, useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'
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
  const hpContext = useContext(AppContext)

  const onChangeListener = (evt) => {
    const target = evt.target
    setFormState({ ...formState, [target.name]: target.value })
  }

  const onSubmit = async (evt) => {
    evt.preventDefault()
    
    if (props.onSubmit) await props.onSubmit(formState)
    
    setFormState(emptyState)
  }

  const deleteHandler = async () => {
    await hpContext.deleteApp(props.app)
  }

  return (
    <form className='AppForm' onSubmit={onSubmit}>
      <label htmlFor='name'>Name</label>
      <input 
        id='name'
        name='name'
        type='text'
        placeholder='Name'
        value={formState.name}
        onChange={onChangeListener}
        required
      />
      
      <label htmlFor='url'>Url</label>
      <input 
        id='url'
        name='url'
        type='text'
        placeholder='URL'
        value={formState.url}
        onChange={onChangeListener}
        required
      />
      
      <label htmlFor='image_path'>Image Path</label>
      <input 
        id='image_path'
        name='image_path'
        type='text'
        placeholder='Image'
        value={formState.image_path}
        onChange={onChangeListener}
      />
      
      <div className='buttons-container'>
        <button className='success' type='submit'>{props.app ? 'Edit' : 'Add'}</button>
        {props.app && (
          <button className='danger' type='button' onClick={() => deleteHandler()}>Delete</button>
        )}

        {props.onCancel && (
          <button className='danger' type='button' onClick={() => props.onCancel()}>Cancel</button>
        )}
      </div>
    </form>
  )
}

export default AppForm