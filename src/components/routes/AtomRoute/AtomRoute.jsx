import { ATOM_API } from '../../../global'
import './AtomRoute.css'

const AtomRoute = () => {
  return (
    <div className='AtomRoute'>
      <h2>Atom</h2>

      <img className='atom-video-feed' src={`${ATOM_API}/video_feed`} alt='Atom video feed' />

      <div className='controls'>
        <button>Left</button>
        <button>Right</button>
        <button>Up</button>
        <button>Down</button>
      </div>
    </div>
  )
}

export default AtomRoute
