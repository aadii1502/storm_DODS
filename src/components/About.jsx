import React from 'react'
import Lottie from 'lottie-react'
import animation from '../assets/Animation - 1696426523977.json'

const About = () => {
  return (
    <div className=" bg-gradient-to-b from-purple-200 to-white pt-[100vh] h-full">
        <div className="bg-gradient-to-b from-purple-200 to-white">
          <div className='flex'>
              <div className='h-[100vh]'>
                <Lottie className='h-[90vh]' animationData={animation}/>
              </div>
              <div className=' text-4xl font-bold font-mono pr-[10vh] py-[22vh]'>About Us
              <div className=' w-[500px] text-lg  py-2 font-sans font-semibold'>
                <br />
              At UnityLearn, we believe that every challenge is an opportunity to learn and grow. Your abilities define you, not your disabilities.
              <br />
              <br />
              Our journey began with the belief that education should be accessible to everyone, regardless of their abilities. We're here to break barriers, open doors, and light the path to knowledge for all.

                </div></div>
          </div>
        </div>
        </div>
  )
}

export default About
