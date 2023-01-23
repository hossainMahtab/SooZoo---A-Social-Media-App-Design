import React from 'react'
import AddIcon from '@mui/icons-material/Add';

import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const demoStories = [
    {
       "id": 2,
       "username": "Alex",
       "cover":"https://images.pexels.com/photos/5255164/pexels-photo-5255164.jpeg?auto=compress&cs=tinysrgb&w=600"
    
    },
    {
       "id":3,
       "username": "Jones",
       "cover":"https://images.pexels.com/photos/7651066/pexels-photo-7651066.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
       "id":4,
       "username": "Josef",
       "cover":"https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "id":5,
      "username": "Damien",
      "cover":"https://images.pexels.com/photos/12671559/pexels-photo-12671559.jpeg?auto=compress&cs=tinysrgb&w=600"
   }
   
 ]

  return (
    <div className='w-full h-auto  overflow-hidden'>
    <section className='grid grid-cols-5 h-[200px] md:h-[230px] lg:h-[280px] gap-2 w-full p-2 ' >
        
        <div className='overflow-hidden relative'>
            <div className='absolute bottom-2 left-2 md:left-3 lg:left-3'>
              <div className='flex flex-col gap-2'>
                <button className='text-white bg-blue-500 w-[30px] md:h-[30px] rounded-full cursor-pointer transition-all hover:scale-[1.2] flex items-center'><AddIcon style={{ fontSize: 30 }}  /></button>
                <span className='font-bold text-base text-white'>{currentUser.username}</span>
              </div>
            </div>

            <img src={currentUser.profilePic} alt=""  className='w-[100%] h-[100%] rounded object-cover'/> 
        </div>

         {demoStories.map((demoStory) => {
           const {id, username , cover} = demoStory
             return (
               <article key={id} className=' overflow-hidden relative' >

                   {username && <span className='font-bold text-white text-base absolute bottom-2 left-2 md:left-2 lg:left-3 '>{username}</span>}
                   {cover && < img src={cover} alt= "" className='w-[100%] h-[100%]  rounded object-cover'/> }
               
               </article>     
           )
         })}
     </section>
 </div>
  )
}

export default Stories
