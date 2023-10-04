import React from 'react'


const Footer = () => {
  return (
    <div className=' my-10'>
    <div className=' grid grid-cols-4 gap-x-20 text-white font-serif py-4 bg-purple-950'>
           <div>
            <ul className=' flex flex-col w-[40vh] px-10'>
                <li className=' font-bold text-3xl py-2'>About us</li>
                <li>Far far away, behind the word mountains, far from the countries, there live the blind texts.</li>
            </ul>
           </div>

           <div>
           <ul className=' flex flex-col w-[40vh] px-10'>
                <li className=' font-bold text-3xl py-2'>Links</li>
                <li className=' py-1'>Home</li>
                <li className=' py-1'>Contact Us</li>
                <li className=' py-1'>About</li>
                <li className=' py-1'>Event</li>
            </ul>
           </div>

           <div>
           <ul className=' flex flex-col w-[50vh] px-10'>
                <li className=' font-bold text-3xl py-2'>Have a Question?</li>
                <li className='py-1'>203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li className='py-1'>+2 392 3929 210</li>
                <li className='py-1'>info@yourdomain.com</li>
            </ul>
           </div>

           <div>
           <ul className=' flex flex-col w-[40vh] px-10'>
                <li className=' font-bold text-3xl py-2'>Recent Blog</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam, saepe incidunt accusamus harum voluptatem eveniet.</li>
            </ul>
           </div>
    </div>
    </div>
  )
}

export default Footer
