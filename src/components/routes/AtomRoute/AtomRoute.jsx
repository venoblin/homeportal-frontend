import { useEffect } from 'react'
import { ATOM_API } from '../../../global'
import './AtomRoute.css'

const AtomRoute = () => {

  const handleKeyDown = (evt) => {
    switch (evt.key) {
      case 'w':
        console.log('North')
        break
      case 'a':
        console.log('West')
        break
      case 's':
        console.log('South')
        break
      case 'd':
        console.log('East')
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
