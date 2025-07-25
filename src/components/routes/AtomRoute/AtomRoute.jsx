import { useEffect } from 'react'
import { ATOM_API } from '../../../global'
import './AtomRoute.css'

const AtomRoute = () => {

  const onKeyDown = (evt) => {
    console.log(evt.key)
  }
  
  return (
    <div className='AtomRoute'>
      <h2>Atom</h2>

      <img className='atom-video-feed' src={`${ATOM_API}/video_feed`} alt='Atom video feed' />
    </div>
  )
}

export default AtomRoute
