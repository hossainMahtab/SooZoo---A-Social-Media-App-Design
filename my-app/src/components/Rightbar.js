import React from 'react'

const Rightbar = () => {
  return (
    <div className='bg-[rgb(242,244,244)] h-[calc(100vh-50px)]  sticky top-[50px] overflow-auto scrollbar-hide p-2'> {/* leftbar*/}
      <div className='  flex flex-col gap-4' > {/*container */}
        <div className='flex flex-col w-[100%] h-auto p-4  bg-white gap-2 rounded'> {/* 1st item*/}
            <span className='font-light lg:text-lg'>People you may know</span>
            
            <div className='flex justify-between items-center  md:text-sm lg:text-base '>
              <div className='flex p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='flex gap-2  md:text-sm lg:text-base'>
                <button className='font-semibold p-2 bg-blue-500 rounded text-white'>Follow</button>
                <button className='font-semibold p-2 bg-red-500 rounded text-white'>Remove</button>
             </div>
            </div>
            <div className='flex justify-between items-center  md:text-sm lg:text-base'>
              <div className='flex p-2 gap-2 '>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='flex gap-2  md:text-sm lg:text-base'>
                <button className='font-semibold p-2 bg-blue-500 rounded text-white'>Follow</button>
                <button className='font-semibold p-2 bg-red-500 rounded text-white'>Remove</button>
             </div>
             
            </div>

        </div>

        

         {/* 3rd card */}

         <div className='flex flex-col w-[100%] h-auto p-4  bg-white gap-2 rounded'> {/* 1st item*/}
            <span className='font-light lg:text-lg'>Friends online</span>
            
            <div className='flex justify-between items-center '>
              <div className='flex p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>

            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>
            
            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>
            
            <div className='flex justify-between items-center '>
              <div className='flex justify-between items-center p-2 gap-2  md:text-sm lg:text-base'>
                <img className='w-[25px] h-[25px] rounded-full object-cover' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>King</span>
              </div>
              <div className='w-[12px] h-[12px] rounded-full bg-lime-500'>
                <span ></span>
              </div>
            </div>



        </div>


      </div>
    </div>
  )
}

export default Rightbar
