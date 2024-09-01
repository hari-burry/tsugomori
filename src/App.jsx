import {RevolvingDot} from 'react-loader-spinner';
import './App.css'
import { useEffect, useState } from 'react';
import {TypeAnimation } from 'react-type-animation';
import Home from './Home.jsx';
import { Link } from 'react-router-dom';
import image from './assets/mo.jpg'


function App() {

  
  return (
    <>
    <div className='bdy'>
    <div className='hd'>
      <div className='header'>
   
         
        <h1 className='title'>ASTÈRIX</h1>
      </div>
      </div>
      <div className='bodydiv'>
       <div className='txt'>
        <div className='box'>
        <TypeAnimation
      sequence={[
       'Enhance Low Light Images'
       
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: '2em', display: 'inline-block',color:'greenyellow',fontWeight:'400'}}
    />
        
        <h3>Unlock the hidden details of the Moon's shadowed craters with our custom-built image processing algorithm.
           Designed exclusively for the Permanently Shadowed Regions (PSR) captured by the Orbiter High Resolution Camera (OHRC) aboard Chandrayaan-2, our technology enhances visibility where no sunlight reaches,
            revealing the secrets of the lunar surface like never before.
        </h3>
       </div>
       </div>

       <div className='div'>
       <img src={image} className='img'></img>
      </div>

      </div>
      <div className='btndiv'>
      <Link className='l' to='/home'>
      <button className='btn'>
        GET STARTED</button>
        </Link>
 
      </div>
     </div>

      


     
    </>
  )
}
  


export default App
