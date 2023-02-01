import React,{useState} from 'react'
import './Popup.css'
import Popup from './popup'
const Card = () => {
  const [buttonPopup, setButtonPopup] = useState(false)
 
const view=()=>{
  setButtonPopup(true);
}
  return (
    <div className='mt-[6rem]'>
    <div className='border-solid border-2 border-grey rounded-xl mt-[10px] bg-white shadow-lg shadow-[grey]'>
      <div className='flex  justify-between items-center m-10 '>
        <div>
          <h1 className='text-[15px]  text-black'>UserName</h1>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>Company</h1>
          <p className='text-[grey]' >details</p>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>Website</h1>
          <p className='text-[grey]'>details</p>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>City</h1>
          <p className='text-[grey]'>details</p>
        </div>
        <div>
          <button className='bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-2 px-4 rounded-full' onClick={view}>View Details</button>
        </div>
      </div>
    </div>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
    <div className="h-[100%] flex justify-between rounded-xl items-center border-solid border-grey border-[2px] ">
       <div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Name</h1>
         <p className='text-[black] text-[12px] '>name</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Username</h1>
        <p className='text-[black] text-[12px] '>username</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Email</h1>
        <p className='text-[black] text-[12px] '>email</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Contact</h1>
        <p className='text-[black] text-[12px] '>phone</p>
        </div>
        </div>
        <div>
          <div className='flex items-center'>
        <h1 className='text-[15px] font-bold mr-5'>Company</h1>
        <p className='text-[black] text-[12px] '>name</p>
          </div>
          <div className='flex items-center'>
        <h1 className='text-[15px] font-bold mr-5'>Website</h1>
        <p className='text-[black] text-[12px] '>website</p>
          </div>
        <p className='text-[15px] font-bold'>Catch-Phrase</p>
        <p className='text-[15px] font-bold'>bs</p>
        </div>
        <div>
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>Address</h1>
          <p className='text-[black] text-[12px] '>Address</p>
          </div>
          <div className='flex  justify-between border-[grey] border-solid border-[2px]'> 
          <div>
          <div>
          <h1 className='text-[15px] font-bold'>street</h1>
          <p className='text-[black] text-[12px] '>street</p>
          </div>
          <div>
          <h1 className='text-[15px] font-bold'>suite</h1>
          <p className='text-[black] text-[12px] '>suite</p>
          </div>       
          <div>
          <h1 className='text-[15px] font-bold'>city</h1>
          <p className='text-[black] text-[12px] '>city</p>
          </div>
          </div>
          <div>
                 
          <div>
          <h1 className='text-[15px] font-bold'>zipcode</h1>
          <p className='text-[black] text-[12px] '>zipcode</p>
          </div>
          <div>
          <h1 className='text-[15px] font-bold'>lat</h1>
          <p className='text-[black] text-[12px] '>lat</p>  
          </div>      
          <div>
          <h1 className='text-[15px] font-bold'>lng</h1>
          <p className='text-[black] text-[12px] '>lng</p> 
         </div> 
         </div> 
         </div>   
        </div>
      </div>
</Popup>
    </div>
  )
}

export default Card
