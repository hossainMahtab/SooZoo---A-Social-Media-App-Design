import React from 'react'
import { Link} from 'react-router-dom'

const Login = () => {

  return (
    <div className='h-screen max-w-[1640px] bg-slate-500 flex items-center justify-center'>
        <div className=" w-[550px] md:w-[750px] lg:w-[950px] h-[600px] bg-white flex rounded-[10px]  overflow-hidden m-4 " >
            
        <div className="flex-1 bg-white ">
                <div className="flex flex-col p-4 justify-center h-full " >
                    <h1 className='text-5xl text-blue-500 font-semibold mb-4'>Register</h1>
                    <form className='flex flex-col gap-4'>
                        <input type="text" id='username' name='username' placeholder='Username' className='p-1 my-1 outline-none border-b-2' />
                        <input type="email" id='email' name='email' placeholder='abcd@gmail.com' className='p-1 my-1 outline-none border-b-2' />
                        <input type="text" id='password' name='password' placeholder='******' className='p-1 my-1 outline-none border-b-2' />
                        <button className='bg-blue-500 mt-4 p-2 rounded-[10px] font-bold text-white cursor-pointer'>Register</button>
                    </form>

                </div>
                
            </div>
            
            <div className="flex-1 bg-[url('https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover  ">
                <div className='bg-black/40 text-white p-6 flex flex-col justify-center  h-full '>
                    <h1 className='font-bold mb-4 '> Social App </h1>
                    <p className= 'mb-4 text-white/80 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.</p>
                    <span className='text-white font-extralight'>Already have an account? <Link to="/login"><button className='text-2xl text-blue-500 font-semibold' >Login</button></Link>  </span>
                </div> 
                        
            </div>
            
        </div>
      
    </div>
  )
}

export default Login
