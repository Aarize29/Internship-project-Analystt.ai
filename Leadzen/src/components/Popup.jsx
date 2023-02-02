import React from 'react'
import { MdClose } from 'react-icons/md';
import './Popup.css'
function Popup(props) {
  return (props.trigger)?(

    <div className='popup'>
      <div className="popup-inner">
        <h2 className='text-[#4A5568] font-bold text-[15px]'>User Details</h2>
        <span  className='close-btn ' onClick={()=>{props.setTrigger(false)}} ><MdClose/></span>
        {props.children}
       
      </div>
    </div>
    
  ):""
}

export default Popup