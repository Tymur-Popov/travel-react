import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const SelectsCard = (props) => {
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);
  return (
    <div  data-aos="flip-up">
        <div className='relative w-full h-full hover:skew-y-6 transition ease-in-out'>
            <img className=' w-full h-full object-cover' src={props.bg} alt="BoraBora" />
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'>
                <p className='absolute left-4 bottom-4 text-2xl text-white font-bold'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default SelectsCard