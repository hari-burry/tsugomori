import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useEffect,useRef } from 'react';

function Home(){
    const navigate=useNavigate();
    const clickRef=useRef(null);
    const goto=()=>{
        navigate('/solution');
    }
    useEffect(()=>{
        document.addEventListener('keydown',(e)=>{
               if(e.key==='Enter'){
                  clickRef.current.click();
               }
    
   
   
        })
       },[]);

    return(
   <div className={`bg-[url('https://i.pinimg.com/originals/2a/14/78/2a1478816ebf07115dc53eddcda84450.jpg')] bg-cover bg-center h-[91vh]  flex flex-col justify-center items-center`}>
   <div className=' flex flex-col  mx-auto w-max h-max  p-5'>
    <h1 className=' font-bold text-white font-Montserrat text-4xl animate-fadeIn'>LOW LIGHT IMAGE ENHANCEMENT</h1>
    <h1 className='font-bold block mx-auto text-white font-Montserrat text-4xl animate-fadeIn'><i>of</i> PSR IMAGES</h1>
   </div>
   <button  ref={clickRef} onClick={goto} className='block text-white border-0 border-transparent  font-Montserrat font-semibold text-lg mt-[20vh] rounded-full mx-auto p-2 px-14  transition-colors duration-300 bg-black hover:bg-white hover:text-black active:font-bold'>GET STARTED</button>
   </div>
    )

    
}

export default Home