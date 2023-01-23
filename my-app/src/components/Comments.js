import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const dummyComments = [
        {
        id: 1,
        userID: 1,
        username: "Alex",
        profilePic: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum is ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.", 
        },
        {
          id: 2,
          userID: 2,
          username: "Jones",
          profilePic: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae."
        } 
    ]

  return (
    <section>
        <div className='flex items-center gap-2 p-2 w-full'>
            <img src={currentUser.profilePic} alt="" className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex gap-2 w-[calc(100%-40px)]'>
                <input type="text" placeholder='Add a comment...' className=' w-[90%] h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-2'/>
                <button className='w-[10%] font-semibold p-2 bg-blue-500 rounded text-white'>Post</button>
            </div>
            

        </div>
        {dummyComments.map((dummyComment) => {
            const {id, username, profilePic, desc} = dummyComment
            return (
                <article key={id} className='flex items-center gap-2 p-2 '>
                    <img src={profilePic} alt="" className='w-10 h-10 rounded-full object-cover'/>
                    <div className='flex items-center gap-2 w-[100%-40px]'>
                        <div className='flex flex-col w-[90%]'>
                            <span className='font-bold text-sm'>{username}</span>
                            <span className='text-sm font-normal'>{desc}</span>
                        </div>
                        <span className='w-[10% text-xs font-extralight]'>1 min ago</span>                        
                    </div>

                </article>
            )
        })}
      
    </section>
  )
}

export default Comments
