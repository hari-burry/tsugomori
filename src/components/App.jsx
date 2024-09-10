import '../index.css';
import Mysvg from '../assets/log.png';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
function App(){
    const [hov1,setHov1]=useState(false);
    const [hov2,setHov2]=useState(false);
    const [hov3,setHov3]=useState(false);
    const [hov4,setHov4]=useState(false);

 


    return (
        <div>
<div className={`bg-black h-max pt-1 overflow-hidden`}>
<div>
     <header className='bg-inherit w-[97vw] h-12 rounded-md mx-auto px-2 flex justify-between items-center'>
        <div className=' cursor-pointer flex justify-center items-center'>
      <img src={Mysvg} className='w-7 h-7 bg-transparent'></img>
      <h1 className='text-white text-2xl  ml-2 font-Montserrat'>TSUGOMORI</h1>
      </div>
      <div className='flex justify-between  w-96  rounded-full px-5 mr-10'>
       <div onMouseEnter={()=>setHov1(true)}  onMouseOut={()=>setHov1(false)}> 
      <h2  className='transition duration-200 cursor-pointer text-white  font-Montserrat text-xl'>Home</h2>
      {hov1 &&<hr className='bg-white w-14 mx-auto '></hr>}
      </div>
      <div onMouseEnter={()=>setHov2(true)}  onMouseOut={()=>setHov2(false)}>
      <h2 className='transition duration-200 cursor-pointer text-white font-Montserrat  text-xl'>Solution</h2> 
      {hov2 &&<hr className='bg-white w-16 mx-auto '></hr>}
      </div >
      <div onMouseEnter={()=>setHov3(true)}  onMouseOut={()=>setHov3(false)}>
      <h2 className='transition duration-200 cursor-pointer text-white font-Montserrat  text-lg'>Algorithm</h2>
      {hov3 && <hr className='bg-white w-16 mx-auto '></hr>}
      </div>
      </div>
      <div onMouseEnter={()=>setHov4(true)}  onMouseOut={()=>setHov4(false)}>
      <h2 className=' cursor-pointer text-white font-Montserrat ml-2 text-xl'>About</h2>
      {hov4 && <hr className='bg-white w-16 mx-auto '></hr>}
      </div>
           </header>
           </div>
           
          
        
   </div>
   </div>










    )





}

export default App