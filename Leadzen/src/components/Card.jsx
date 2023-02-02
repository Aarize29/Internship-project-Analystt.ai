import React,{useState} from 'react'
import './Popup.css'
import Popup from './popup'
const Card = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false)
 
const view=()=>{
  setButtonPopup(true);
}
  return (
   
    <div className='mt-[1rem]'>
    <div className='border-solid border-2 border-grey rounded-xl mt-[10px] bg-white min-w-[450px] shadow-lg shadow-[grey]'>
      <div className='flex  justify-between items-center m-10 flex-col  lg:flex-row md:flex-row flex-wrap '>
        <div>
          <h1 className='text-[15px]  text-black'>{props.username}</h1>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>Company</h1>
          <p className='text-[grey]' >{props.company}</p>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>Website</h1>
          <p className='text-[grey]'>{props.website}</p>
        </div>
        <div>
          <h1 className='text-xl flex flex-col font-bold text-black'>City</h1>
          <p className='text-[grey]'>{props.city}</p>
        </div>
        <div>
          <button className='bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-2 px-4 rounded-full' onClick={view}>View Details</button>
        </div>
      </div>
    </div>

    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} >
    <div className="h-[100%] grid rounded-xl items-center border-solid border-grey border-[2px] ">
   
       <div className='ml-5'>
        <div className='flex items-center '  >
        <h1 className='text-[15px] mr-5 font-bold'>Name</h1>
         <p className='text-[black] text-[12px] '>{props.name}</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Username</h1>
        <p className='text-[black] text-[12px] '>{props.username}</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Email</h1>
        <p className='text-[black] text-[12px] '>{props.email}</p>
        </div>
        <div className='flex items-center'>
        <h1 className='text-[15px] mr-5 font-bold'>Contact</h1>
        <p className='text-[black] text-[12px] '>{props.phone}</p>
        </div>
        </div>
        <div className='ml-5'>
          <div className='flex items-center'>
        <h1 className='text-[15px] font-bold mr-5'>Company</h1>
        <p className='text-[black] text-[12px] '>{props.company}</p>
          </div>
          <div className='flex items-center'>
        <h1 className='text-[15px] font-bold mr-5'>Website</h1>
        <p className='text-[black] text-[12px] '>{props.website}</p>
          </div>
        
        <div className='border-solid border-[2px] border-[grey] mr-5 rounded-xl'>

        <p className='text-[15px] font-bold text-[gray]'>{props.catchphrase}</p>
        <p className='text-[15px] font-bold text-[grey]'>{props.bs}</p>
        </div>
        
        </div>
        <div className='ml-5'>
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>Address</h1>
          <p className='text-[black] text-[12px] '>{props.address}</p>
          </div>
          <div className='flex  justify-between '> 
          <div>
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>street</h1>
          <p className='text-[black] text-[12px] '>{props.street}</p>
          </div>
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>suite</h1>
          <p className='text-[black] text-[12px] '>{props.suite}</p>
          </div>       
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>city</h1>
          <p className='text-[black] text-[12px] '>{props.city}</p>
          </div>
          </div>
          <div className='mr-[50%]'>
                 
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>zipcode</h1>
          <p className='text-[black] text-[12px] '>{props.zipcode}</p>
          </div>
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>lat</h1>
          <p className='text-[black] text-[12px] '>{props.lat}</p>  
          </div>      
          <div className='flex items-center'>
          <h1 className='text-[15px] font-bold mr-5'>lng</h1>
          <p className='text-[black] text-[12px] '>{props.lng}</p> 
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
