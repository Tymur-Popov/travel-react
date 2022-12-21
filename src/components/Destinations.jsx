import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const Destinations = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <div className=' max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Resorts</h1>
        <p className='mt-2'>On the Carribean`s Best Beaches</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4' data-aos="fade-up">
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="BoraBora" />
            <img className='w-full h-full object-cover' src={BoraBora2} alt="BoraBora2"/>
            <img className='w-full h-full object-cover' src={Maldives} alt="Maldives"/>
            <img className='w-full h-full object-cover' src={Maldives2} alt="Maldives2"/>
            <img className='w-full h-full object-cover' src={KeyWest} alt="KeyWest"/>
        </div>
    </div>
  )
}

export default Destinations