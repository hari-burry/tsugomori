import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Home from './components/Home.jsx';
import Gen from './components/Gen.jsx';
import Layout from './Layout.jsx';
import {createBrowserRouter,createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

const router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='solution' element={<Gen/>}/>
    </Route>
)


)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
