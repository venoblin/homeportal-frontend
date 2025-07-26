import { useEffect } from 'react'
import { PostCommand } from '../../../services/atom'
import { ATOM_API } from '../../../global'
import './AtomRoute.css'

const AtomRoute = () => {

  const handleKeyDown = async (evt) => {
    switch (evt.key) {
      case 'w':
        await PostCommand({command: 'up'})
        break
      case 'a':
        await PostCommand({command: 'left'})
        break
      case 's':
        await PostCommand({command: 'south'})
        break
      case 'd':
        await PostCommand({command: 'right'})
        break
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return (
    <div className='AtomRoute'>
      <h2>Atom</h2>

      <img className='atom-video-feed' src={`${ATOM_API}/video_feed`} alt='Atom video feed' />
    </div>
  )
}

export default AtomRoute
