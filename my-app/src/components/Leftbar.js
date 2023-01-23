import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import StoreIcon from '@mui/icons-material/Store';
import MovieIcon from '@mui/icons-material/Movie';
import HistoryIcon from '@mui/icons-material/History';


import EventIcon from '@mui/icons-material/Event';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';

import FlagIcon from '@mui/icons-material/Flag';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext';

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (

    <div className=' bg-white h-[calc(100vh-50px)] sticky top-[50px] overflow-auto scrollbar-hide p-2 '> {/* leftbar*/}
      <div className=' p-2 flex flex-col items-start w-full h-auto' > {/*container */}
        <ul className='  flex flex-col items-start w-full border-b-2 '>                       {/* menu*/} 
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>       
            <img className='w-[25px] h-[25px] rounded-full object-cover' src={currentUser.profilePic} alt="" />
            <span className='font-semibold'>{currentUser.username}</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <PeopleIcon/>
            <span>Friends</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <Diversity3Icon />
            <span>Group</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <StoreIcon/>
            <span>Marketplace</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <MovieIcon/>
            <span>Wacth</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <HistoryIcon />
            <span>Memories</span>
          </li>
        </ul>
{/* /////////////////////////////////////  */}
        <ul className=' flex flex-col items-start w-full border-b-2'>                       {/* menu*/} 
          <span className='font-light mb-2 '>Your Shorcuts</span>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <EventIcon/>
            <span>Events</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <SportsEsportsIcon/>
            <span>Gaming</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <InsertPhotoIcon  />
            <span>Gallery</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <OndemandVideoIcon />
            <span>Videos</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer '>
            <MessageIcon/>
            <span>Messages</span>
            
          </li>
        </ul>


{/* /////////////////////////////////////  */}
        <ul className=' flex flex-col items-start '>                       {/* menu*/} 
          <span className='font-light mb-2 '>Others</span>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <FlagIcon/>
            <span>Pages</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <LocalOfferIcon/>
            <span>Offers</span>
          </li>
          <li className='flex items-center gap-2 md:gap-4 mb-2 cursor-pointer'>
            <BookmarkIcon />
            <span>Saved</span>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Leftbar
