import './App.css'
import { useEffect } from 'react'
import RepComponent from './components/RepComponent'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Repos from './components/Repos'
import SingleRepo from './components/SingleRepo'
import NotFound from './components/NotFound'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repos' element={<Repos />} />
        <Route path='/repos/:repoId' element={<SingleRepo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
