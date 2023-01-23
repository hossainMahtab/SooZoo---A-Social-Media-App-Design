import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const SharePost = () => {
    const { currentUser } = useContext(AuthContext)
  return (
    <div className='w-full h-[160px] p-2'>
      <div className='w-full h-full bg-white px-2 py-4 rounded'> 
        <div className='flex w-full h-[70%] gap-2 p-2'> 
            <img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] rounded-full object-cover' src={currentUser.profilePic} alt="" />
            <textarea className=' w-[95%] resize-none border-none outline-none px-2 overflow-auto scrollbar-hide' placeholder={`What's on your mind ${currentUser.username}?`}/>
        </div>
        <div className='flex items-center h-[30%] w-full '> 
            <div className='w-[70%] lg:w-[60%] flex justify-between h-full p-2'> 
                <div className='flex items-center  gap-2'>
                    <img className='w-[30px] h-[30px]' src='https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png' alt=''/>
                    <span className='hidden md:block '>Add Image</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-[30px] h-[30px]' src='https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png' alt=''/>
                    <span className='hidden md:block '>Add Place</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-[30px] h-[30px]' src='https://icon-library.com/images/refer-a-friend-icon-png/refer-a-friend-icon-png-19.jpg' alt=''/>
                    <span className='hidden md:block '>Tag Friends</span>
                </div>               
            </div>
            <div className='w-[30%] lg:w-[40%] flex items-center justify-end h-full p-2'> 
                <button className='px-2 py-1 rounded bg-blue-600 text-white'>Post</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SharePost
