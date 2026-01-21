import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import ProjectsPage from './pages/ProjectPage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='' element={<Index/>} />
      <Route path='projects' element={<ProjectsPage/>} />
         </Routes>
          <Toaster position="top-right" />
         </>
  )
}

export default App