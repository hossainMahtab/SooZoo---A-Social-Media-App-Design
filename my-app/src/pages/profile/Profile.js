import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Post from '../../components/Posts'
import SharePost from '../../components/SharePost';

const Profile = () => {

  return (
    <div className=' bg-[rgb(242,244,244)] w-[100%] h-auto flex flex-col items-center'>
      <div className='flex flex-col items-centers w-full lg:w-[90%] h-[550px] bg-black ' >
        <div className='h-[300px] w-full relative'>

          <img className='w-[100%] h-[100%] lg:h-[120%] object-cover' src="https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <img className=' w-[250px] h-[250px] left-0 right-0 top-[170px] m-auto lg:m-0 lg:left-6 lg:top-[250px] rounded-full object-cover absolute' src="https://images.pexels.com/photos/1509684/pexels-photo-1509684.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className=' bg-white w-full h-[250px]'>
          <div className='bg-white w-full h-[100%] flex flex-col items-center gap-4 justify-center lg:items-start lg:justify-start pt-[100px] lg:pt-[70px] lg:pl-[290px] '>
            <h1 >Useradasdadas</h1>
            <span className='flex gap-4'>
              <button className='bg-blue-500 w-[110px] px-2 py-1 rounded text-white font-bold lg:px-2 lg:py-1 '>follow</button>
              <button className='bg-blue-500 w-[110px] px-2 py-1 rounded text-white font-bold lg:px-2 lg:py-1 '><EmailIcon /> Message </button>
            </span>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-12 gap-2 py-2 justify-center w-full lg:w-[90%] h-auto ' >

        <div className=' col-span-4 md:col-span-3 h-auto pl-6 py-6 '>
          <div className='flex flex-col w-full p-4  bg-white gap-2 rounded'> {/* 1st item*/}
            <p>About</p>
            <span>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.",
            </span>

          </div>

        </div>

        <div className=' col-span-8 md:col-span-9 pr-4 py-4 '>
          <SharePost/>
          <Post />
        </div>
      </div>


    </div>
  )
}

export default Profile
