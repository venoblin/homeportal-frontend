import { Routes, Route, Link, useLocation } from 'react-router-dom'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewAppRoute from './components/routes/NewAppRoute/NewAppRoute'
import './styles/App.css'
import AtomRoute from './components/routes/AtomRoute/AtomRoute'
import HostRoute from './components/routes/HostRoute/HostRoute'

function App() {
  const location = useLocation()
  
  return (
    <div className='App'>
      <nav>
        <div className='logo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          	<path fill="#ab47bc" d="M28.967 12H9.442a2 2 0 0 0-1.898 1.368L4 24V10h24a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h22l4.805-11.212A2 2 0 0 0 28.967 12" />
          	<path fill="#e1bee7" d="M20 12L8 22h4v8h6v-6h4v6h6v-8h4z" />
          </svg>
          <p>HomePortal</p>
        </div>
        
        <div className='links-wrap'>
          <Link className={`link ${location.pathname === '/' && 'active'}`} to='/'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                <defs>
                  <mask id="SVGoWG3zdla">
                    <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                      <rect width="40" height="30" x="4" y="6" fill="#555555" rx="3" />
                      <path d="M24 36v7m8-29L16 28m-6 15h28" />
                      <circle cx="15" cy="17" r="3" fill="#555555" />
                      <circle cx="33" cy="25" r="3" fill="#555555" />
                    </g>
                  </mask>
                </defs>
                <path fill="#989898" d="M0 0h48v48H0z" mask="url(#SVGoWG3zdla)" />
              </svg>
              
              <p>Dashboard</p>
            </div>
          </Link>

          <Link className={`link ${location.pathname === '/host' && 'active'}`} to='/host'>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 48 48">
                <defs>
                  <mask id="SVGwCY6XcVw">
                    <g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={4}>
                      <path fill="#555555" strokeLinejoin="round" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></path>
                      <path d="M4 32h40"></path>
                      <path strokeLinejoin="round" d="M10 38h1m15 0h12m6-1V27M4 37V27"></path>
                    </g>
                  </mask>
                </defs>
                <path fill="#989898" d="M0 0h48v48H0z" mask="url(#SVGwCY6XcVw)"></path>
              </svg>
              
              <p>Host</p>
            </div>
          </Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<HomeRoute />} />
          <Route path='/new' element={<NewAppRoute />} />
          <Route path='/host' element={ <HostRoute /> } />
          <Route path='/atom' element={<AtomRoute />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
