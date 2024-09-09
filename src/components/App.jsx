import '../index.css';
import image from '../assets/wl2.jpg';
import Mysvg from '../assets/log.png';
import { Outlet } from 'react-router-dom';
function App(){
 


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
      <h2 className=' cursor-pointer text-white  font-Montserrat ml-2 text-xl'>Home</h2>
      <h2 className=' cursor-pointer text-white font-Montserrat ml-2 text-xl'>Solution</h2>      
      <h2 className=' cursor-pointer text-white font-Montserrat ml-2 text-lg'>Algorithm</h2>
      </div>
      <h2 className=' cursor-pointer text-white font-Montserrat ml-2 text-xl'>About</h2>
           </header>
           </div>
           
          
        
   </div>
   </div>










    )





}

export default App