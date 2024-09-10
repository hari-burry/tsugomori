import '../index.css';
import img from '../assets/upload.png'
import { useEffect, useRef, useState } from 'react';
import {Client} from '@gradio/client';
import 'react';

function Gen(){
 
   const fileRef=useRef(null);
   const [btn,setBtn]=useState(false);
   const [file,setFile]=useState(false);
   const handleclick=()=>{
      fileRef.current.click();
   }
   const handlechange=(event)=>{
       if(event.target.files.length>0){
         setFile(event.target.files[0].name);
         setBtn(true);
       }
       else{
         setFile("No File Chosen");
         setBtn(false);
       }
   }
   const fetchdata=async()=>{

const response_0 = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mandel%27shtam_crater_1116_med.jpg/300px-Mandel%27shtam_crater_1116_med.jpg");
const exampleImage = await response_0.blob();
						
const client = await Client.connect("Sreeius/NilavinPugaipadam");
const result = await client.predict("/enhance_image", { 
				image: exampleImage, 
});

console.log(result.data);

   }
   const handledrag=(e)=>{
    e.preventDefault();
   };
   const handledrop=(e)=>{
    console.log("dropped");
    e.preventDefault();
    const file=e.dataTransfer.files[0];
    if(file){
      if(fileRef.current){
        const dtrans= new DataTransfer();
        dtrans.items.add(file);
        fileRef.current.files=dtrans.files;
        
      }
    }
   }


  return(
     <div className='bg-black h-[91vh] pt-3'>
      <h1 className='text-white text-xl mt-6 font-semibold ml-5'>PSR Image Enhancement</h1>
      <div className=' mx-auto w-[97vw] h-[6vh] mt-1 mb-4 flex items-center justify-between '>
      <h2 className='inline-block text-white text-lg font-normal'>Upload an Image of the Permanently Shadowed Region(PSR) to enhance its visibility</h2>
      {btn &&
        <>
      <button onClick={fetchdata} className=' inline-block bg-cyan-500 w-[30vw] text-black ease-in duration-150 hover:bg-cyan-700 rounded-full border border-transparent py-2 font-semibold'>Generate Image</button>
        </>
        }
        </div>
      <div className=' mt-2 w-[97vw] mx-auto flex justify-between'>
      <div onDragOver={handledrag} onDrop={handledrop} onClick={handleclick}className='cursor-pointer  border border-gray-100  min-w-[48vw] min-h-[40vh] rounded-sm  py-2 flex flex-col  justify-center items-center '>
      <svg width="35px" height="35px" viewBox="0 -2 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    <g id="Page-1" stroke="none" stroke-width="0.5" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-569.000000, -674.000000)" fill="white">
            <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 L579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 L598,690 Z" id="upload" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>
      <h1 className='text-white text-lg font-Montserrat'>Drop Image here</h1>
      <h1 className='text-gray-100 text-lg font-Montserrat'>-Or-</h1>      
      <h1 className='text-white text-lg font-Montserrat'>Click to Upload</h1>
      <input type='file' ref={fileRef} onChange={handlechange} className='hidden'></input>
      </div>
      <div className='border border-gray-100 min-w-[48vw] min-h-[40vh] rounded-sm  py-2 flex  justify-evenly items-center '>
      <h1 className='text-black bg-white font-bold border-2 border-black p-2 px-4 rounded-full font-Montserrat'>Enhanced Image</h1>
      </div>

      
        </div>
    

     </div>



  )




}

export default Gen