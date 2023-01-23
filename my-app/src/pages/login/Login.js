import React from 'react'
import { Link} from 'react-router-dom'

import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  
    const {login} = useContext(AuthContext)

    const handleLogin = () => {
        login()
    }

    return (
    <div className='h-[100vh] max-w-[1640px] bg-slate-500 flex items-center justify-center'>
        <div className=" w-[500px] md:w-[700px] lg:w-[900px] h-[600px] bg-white flex rounded-[10px]  overflow-hidden m-4 " >
            
            <div className="flex-1 bg-[url('https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover  ">
                <div className='bg-black/40 text-white p-4 flex flex-col justify-center  h-full '>
                    <h1 className='mb-4  font-bold'> Social App </h1>
                    <p className='mb-4 text-white/80 font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores provident, sequi quibusdam, amet maiores qui eum ducimus ab veritatis magnam tenetur perspiciatis excepturi ex velit? Eius neque ex totam quae.</p>
                    <span className='text-white font-extralight'>Don't have an account? <Link to="/register"><button className='text-2xl text-blue-500 font-semibold cursor-pointer '>Register</button> </Link>  </span>
                </div> 
                        
            </div>
            <div className="flex-1 bg-white ">
                <div className="flex flex-col p-4 justify-center h-full " >
                    <h1 className='text-5xl text-blue-500 font-semibold mb-4'>Login</h1>
                    <form className='flex flex-col gap-4'>
                        <input type="text" id='username' name='username' placeholder='Username' className='p-1 my-1 outline-none border-b-2 ' />
                        <input type="text" id='password' name='password' placeholder='******' className='p-1 my-1 outline-none border-b-2' />
                        <button onClick={handleLogin} className='bg-blue-500 mt-4 p-2 rounded-[10px] font-bold text-white cursor-pointer'>Log in</button>
                    </form>

                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Login
