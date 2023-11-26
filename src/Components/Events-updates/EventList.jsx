import React from 'react'

const EventList = () => {
  return (
    <div>
        <div className="events flex justify-around items-center border-2 my-3 rounded-xl py-2 hover:cursor-pointer mx-auto">
                    {/* <div className="event-image flex">
                        <img src="./Demo-pics/face-paint.jpeg" alt="event-image" className='sm:w-[50px] w-[60px] rounded-full' /> 
                    </div> */}
                    <div className="event-Info sm:mx-10  flex flex-col justify-center">
                        <p className='font-semibold sm:text-lg text-white'>Face Painting</p>
                        <p className='text-xs font-light text-slate-200'>Gita Garden-2</p>
                        {/* <p className='text-slate-300 text-xs sm:hidden'>Fri,28 Jan 2023</p> */}
                        {/* <p className='text-slate-300 text-xs sm:hidden'>14:25 - 15:35</p> */}
                    </div>
                    <div className="event-timming sm:mx-10 sm:flex flex-col justify-center ">
                        <p className='text-slate-200 font-semibold text-sm'>Fri,28 Jan 2023</p>
                        <p className='text-slate-200 text-xs'>14:25 - 15:35</p>
                    </div>
                </div>
    </div>
  )
}

export default EventList