import React from 'react'
import NavBar from './components/navbar/NavBar'
import Property from './components/Property'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './components/page1/Page1'
import Services from './components/services/Services'
import { Contact } from './components/contacts/Contact'



const App = () => {
  return (
    <div>
      <NavBar />
     
      <Routes>
      <Route path="/" element={<Page1 />} />
        <Route path="/property" element={<Property />} />
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>

      </Routes>
      
    </div>
  )
}

export default App