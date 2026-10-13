import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/syne'
import '@fontsource/ibm-plex-mono/500.css'
import { LandingPage } from './LandingPage'
import { ContactPage } from './ContactPage'
import './styles.css'
import './landing.css'
import './contact.css'

const isContactPage = /\/contact(?:\.html)?\/?$/.test(window.location.pathname)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isContactPage ? <ContactPage /> : <LandingPage />}
  </React.StrictMode>,
)
