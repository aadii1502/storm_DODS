import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Campaign = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <>
    <div>
      <div className="flex bg-gradient-to-b absolute from-white to-purple-200 h-[100vh] py-6 w-full font-semibold font-serif">
        <h1 className=" px-[16vh]  text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold text-transparent">
          UnityLearn
        </h1>
        <div>
          <ul className=" flex font-serif flex-row text-blue-900 py-2">
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Home
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              About
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Donate
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Blog
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Gallery
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Events
            </li>
            <li className=" px-[4vh] hover:text-gray-500 duration-500 z-50 cursor-pointer uppercase">
              Contact
            </li>
          </ul>
          </div>
          </div>

          <button className=' absolute flex justify-center items-center border border-black bg-gray-800 text-white font-bold rounded-xl px-4 py-1 mt-[20vh] ml-[85vh]'>+ Create more campaigns</button>
      
          <div id="campaign" className='grid absolute grid-cols-3 pl-[18vh] gap-x-20 my-64'>
       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:0.5 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://th.bing.com/th?id=OIP.d2SRxtuxA-KBfufYiyuypQHaD4&w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <p className=' text-white py-3 font-bold text-xl'>Scholarship for Inclusivity</p>
        <p className=' text-gray-300 py-3'> Increased access to higher education for disabled students.</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
       </motion.div>

       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:1 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://th.bing.com/th?id=OIP.6nipviTvz-Zindbi2AkYmgHaGe&w=267&h=233&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <p className=' text-white py-3 font-bold text-xl'>Mentorship Matters</p>
        <p className=' text-gray-300 py-3'>Improved access to quality learning materials for disabled students.
</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 rounded-xl'>Donate</a>
       </motion.div>

       <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 , delay:1.5 }}
       className=' bg-gray-800 rounded-2xl shadow-2xl shadow-black  w-[350px] py-4 px-4'>
        <img className=' h-[200px] w-[450px]' src="https://th.bing.com/th?id=OIP.kAazCBJwaop0NJoAvEnTzwHaEv&w=312&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" />
        <p className=' text-white py-2 font-bold text-xl'>Accessible Online Courses Initiative</p>
        <p className=' text-gray-300 py-1'>Increased access to quality education through accessible online courses.
</p>
        <div className=' flex'>
        <p className=' text-white py-1'> <span className=' text-purple-400'>Created by: </span> 37cT...jF7r</p>
        </div>
        <div className=' flex'>
        <p className=' text-white py-1'><span className=' text-purple-400'>Date:</span> June 4, 2023</p>
        </div>
        <a href="/Hello" className=' bg-blue-500 text-white px-4 my-2 rounded-xl'>Donate</a>
       </motion.div>
        
</div>
</div>
 </>
  )
}

export default Campaign
