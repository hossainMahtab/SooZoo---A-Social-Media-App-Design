import React from 'react'
import Post from './Post'

const Posts = () => {

  const dummyPosts = [
    {
    id: 1,
    userID: 1,
    username: "Alex",
    profilePic: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.", 
    img: "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      userID: 2,
      username: "Jones",
      profilePic: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae."
    },
    {
      id: 3,
      userID: 3,
      username: "Josef",
      profilePic: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.", 
      img: "https://images.pexels.com/photos/14332283/pexels-photo-14332283.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      },
      {
        id: 4,
        userId: 3,
        username: "Josef",
        profilePic: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.", 
        },
        {
          id: 5,
          userID: 4,
          username: "Damien",
          profilePic: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.", 
          img: "https://images.pexels.com/photos/14865516/pexels-photo-14865516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      
    ]

  return (
    <section>
      {dummyPosts.map ( (dummyPost) => {
        const newDummy = {dummyPost}
      return <Post {...newDummy}  key= {dummyPost.id} />
      })}
      
    </section>
  )
}

export default Posts
