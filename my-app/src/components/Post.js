import React, { useState } from 'react'
import {Link} from 'react-router-dom' 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comments from './Comments';

const Post = (props) => {
    const {dummyPost} = props
    const {userID, username,profilePic, desc, img} = dummyPost

    const [liked,setLiked] = useState(false)

    const [commented, setCommented] = useState(false)


    const handleLike = ( () => {
        setLiked(true)
        if(liked===true) return setLiked(false)
        
    })

    const handleComment = ( () => {
        setCommented(!commented)

        
    })

  return (
        <section className='flex flex-col gap-2 w-full p-2' >
            <div className='flex flex-col items-start bg-white gap-2 rounded pt-4 pb-4 '>
            <div className='flex items-center w-full justify-between px-4 '>
                <div className='flex items-center gap-2 md:gap-4'>
                    <img className='w-[25px] md:h-[25px] rounded-full object-cover' src={profilePic} alt="" />
                    <div className='flex flex-col'>
                        <Link to={`/profile/${userID}`} >
                            <span className='font-semibold text-base'>{username}</span>

                        </Link>

                        <span className='font-extralight text-sm'>1 min ago</span>
                    </div>
                    
                </div>
                <button><MoreHorizIcon /></button>

            </div>
                {desc && <span className='text-md pt-1 px-4'>{desc}</span> }
                {img && <img className='pt-1 h-[450px] md:h-[550px] w-full object-cover ' src={img} alt=''/> } 
                
                <div className='flex gap-3 px-4 pt-2  w-full '>
                {liked ?   <button onClick={handleLike} className='text-red-600'> <FavoriteIcon style={{fontSize:30}} /></button> : <button onClick={handleLike}> <FavoriteBorderIcon style={{fontSize:30}} /></button> } 12 likes
                   <button onClick={handleComment} ><CommentIcon style={{fontSize:30}}/></button> 2 comments
                   <button><ShareIcon style={{fontSize:30}}/></button> 1 share
                </div>
                {commented && <Comments />}
            </div>
            
        </section>
  )
}

export default Post
