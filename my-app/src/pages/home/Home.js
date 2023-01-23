import React from 'react'
import Post from '../../components/Posts'
import SharePost from '../../components/SharePost'
import Stories from '../../components/Stories'

const Home = () => {
  return (
    <div className='w-full h-auto p-4 bg-[rgb(242,244,244)] '>
      <Stories/>
      <SharePost/>
      <Post />
    </div>

  )
} 

export default Home
