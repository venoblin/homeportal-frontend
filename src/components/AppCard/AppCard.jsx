import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import * as cheerio from 'cheerio'
import axios from 'axios'
import { AppContext } from '../../contexts/AppContext'
import { PatchApp } from '../../services/app'
import AppForm from '../AppForm/AppForm'
import defaultLogo from '../../assets/logos/default-logo.png'
import './AppCard.css'

const AppCard = (props) => {
  const hpContext = useContext(AppContext)
  const navigate = useNavigate()

  const patchHandler = async (formState) => {
    const res = await hpContext.load(() => PatchApp(props.app.id, formState))
    hpContext.updateApp(props.app.idx, res.data.app)
    navigate('/')
  }

  const showEditMenu = () => {
    hpContext.showPopup({
      component: <AppForm app={props.app} onSubmit={patchHandler} />,
      btnText: 'Cancel'
    })
  }

  const getFaviconUrl = async (websiteUrl) => {
    try {
      const { data } = await axios.get(websiteUrl)
      const $ = cheerio.load(data)
      let faviconUrl = null

      $('link[rel*="icon"]').each((i, el) => {
        const href = $(el).attr('href')
        if (href) {
          faviconUrl = url.resolve(websiteUrl, href)
          return false
        }
      })

      if (!faviconUrl) {
        const parsedUrl = new URL(websiteUrl)
        faviconUrl = `${parsedUrl.origin}/favicon.ico`
      }

      return faviconUrl
    } catch (err) {
      throw new Error(err)
    }
  }

  
  return (
    <div className='AppCard'>
      <button 
        className='edit'
        onClick={showEditMenu}
      >Edit</button>
      
      
      
      <a href={props.app.url} target='blank' className='app'>
        <p className='name'>{props.app.name}</p>
        <img src={defaultLogo} />
      </a>
    </div>
  )
}

export default AppCard