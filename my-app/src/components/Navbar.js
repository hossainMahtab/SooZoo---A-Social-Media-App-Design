import { React, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HouseIcon from '@mui/icons-material/House';
//import Brightness3Icon from '@mui/icons-material/Brightness3';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';


const Navbar = (props) => {

  const ref = useRef()

  const { currentUser } = useContext(AuthContext)

  const [dropdownClick, setDropdownClick] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (dropdownClick && ref.current && !ref.current.contains(e.target)) {
        setDropdownClick(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [dropdownClick])

  const handleDropdown = () => {
    setDropdownClick(!dropdownClick)
  }


  return (
    <div className='z-10 max-w-[1640px] flex justify-between items-center top-0 sticky h-[50px] bg-white p-2 md:px-4 border-b-2'>
      <div className="flex gap-2 md:gap-4 items-center ">
        <Link to="/" className='font-bold text-blue-500 text-xl md:text-2xl'> <span>SooZoo</span> </Link>
        <Link to="/" className='font-bold text-inherit '> <HouseIcon /> </Link>
        {/* <Brightness3Icon /> */}
        <div className='flex items-center gap-2 md:gap-4'>
          <SearchIcon />
          <input type="text" placeholder="Search" className='w-[120px] md:w-[300px] lg:w-[600px] rounded outline-none px-1' />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <PersonIcon />
        <EmailIcon />
        <NotificationsIcon />


        <div className='flex items-center' >
          <div onClick={handleDropdown} >
            {dropdownClick ? <div> <p> {currentUser.username}</p> </div> : <div className='flex items-center cursor-pointer gap-2 lg:gap-4' >
              <img className='w-[20px] h-[20px] md:w-[25px] md:h-[25px] rounded-full object-cover' src={currentUser.profilePic} alt="" />
              {/* <span className='hidden  md:block font-semibold'>{currentUser.username}</span> */}
            </div>}

            <div className={dropdownClick ? ' fixed z-10 right-0 top-[35px]  w-[120px] h-auto ease-in-out duration-300 shadow-xl ' : 'fixed right-[-100%]'} ref={ref} >
              <div className=' flex flex-col w-full bg-white gap-2 p-1 md:p-2 ' >
                <span ><Link to={`/profile/${currentUser.id}`} className='flex items-center w-[100%] p-2 hover:scale-[1.1] hover:shadow-md '> Profile </Link></span>
                <span className='border-b-2'></span>
                <button className='text-blue-500 p-2 hover:scale-[1.1] w-[100%] flex items-center hover:shadow-md'> Logout <LogoutIcon /> </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>

  )
}

export default Navbar
