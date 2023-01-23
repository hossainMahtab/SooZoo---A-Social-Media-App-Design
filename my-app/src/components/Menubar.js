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

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';




const Menubar = () => {

    const { currentUser } = useContext(AuthContext)

    return (

        <div className=' bg-white h-[calc(100vh-50px)] sticky top-[50px] overflow-auto scrollbar-hide p-2 '> {/* leftbar*/}
            <div className=' p-2 flex flex-col items-center w-full h-auto' > {/*container */}
                <ul className='py-2 gap-2  flex flex-col items-center w-full border-b-2 '>                       {/* menu*/}
                    <li className=' relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <img className='w-[23px] h-[23px] max-w-[25px] max-h-[25px] rounded-full object-cover hover:scale-[1.1] hover:shadow-md ' src={currentUser.profilePic} alt="" />
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-8 z-10 flex justify-center items-center text-xs text-black/80 font-light">{currentUser.username}</span>
                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer '>
                        <PeopleIcon  className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Friends</span>
                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <Diversity3Icon className='rounded-full hover:scale-[1.1] hover:shadow-md' />
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Groups</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <StoreIcon className='rounded-full hover:scale-[1.1] hover:shadow-md' />
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Store</span>
                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <MovieIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Watch</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <HistoryIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light ">Memories</span>

                    </li>
                </ul>
                {/* /////////////////////////////////////  */}
                <ul className='relative z-0 py-2 gap-2 flex flex-col items-center w-full border-b-2'>                       {/* menu*/}
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <EventIcon className='rounded-full hover:scale-[1.1] hover:shadow-md' />
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Events</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <SportsEsportsIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Gaming</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <InsertPhotoIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Gallery</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <OndemandVideoIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Videos</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer '>
                        <MessageIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Messages</span>
                    </li>
                </ul>


                {/* /////////////////////////////////////  */}
                <ul className='relative z-0 py-2 gap-2 flex flex-col items-center '>                       {/* menu*/}
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <FlagIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Pages</span>

                   </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <LocalOfferIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Offers</span>

                    </li>
                    <li className='relative z-0 gap-2 md:gap-4 mb-2 cursor-pointer'>
                        <BookmarkIcon className='rounded-full hover:scale-[1.1] hover:shadow-md'/>
                        <span class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 pt-9 z-10 flex justify-center items-center text-xs text-black/80 font-light">Saved</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default Menubar;
