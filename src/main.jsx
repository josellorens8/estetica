import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>,
)
