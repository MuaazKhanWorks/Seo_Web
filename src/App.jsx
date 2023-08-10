import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Mobile from './pages/Mobile'
import Phone from './pages/phone'
import Internet from './pages/Internet'
import SPaisa from './pages/SPaisa'
import Alerts from './pages/Alerts'
 
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/Mobile' element={<Mobile/>}/>
      <Route path='/Phone' element={<Phone/>}/>
        <Route path='/Internet' element={<Internet/>}/>
        <Route path='/SPaisa' element={<SPaisa/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Alerts' element={<Alerts/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
