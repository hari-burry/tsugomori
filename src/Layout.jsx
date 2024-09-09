import './components/App.jsx';
import './index.css';
import './components/Home.jsx';
import './components/Gen.jsx';
import { Outlet } from 'react-router-dom';
import App from './components/App.jsx';
function Layout(){
  return(
    <>
     <App/>
     <Outlet/>
    </>

  )



}

export default Layout
