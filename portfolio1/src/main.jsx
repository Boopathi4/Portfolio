import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componenets/Home/Home.jsx'
import About from './componenets/About/About.jsx'
import Resume from './componenets/Resume/Resume.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='Resume' element={<Resume />} />

      <Route path='*' element={<div style={{height:"100vh", textAlign:"center",paddingTop:"200px", fontSize:"34px"}}>Page Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)