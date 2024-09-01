import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}></Route>
     <Route path='/home' element={<Home/>}/>
     </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
