import React from 'react'

import BoraBora from '../assets/bora-bora-selects.jpg';
import Maldives from '../assets/maldives-selects.jpg';
import KeyWest from '../assets/key-west-selects.jpg';
import Jamaica from '../assets/jamaica-selects.jpg';
import Cozumel from '../assets/cozumel-selects.jpg';
import Antigua from '../assets/antigua-selects.jpg';

import SelectsCard from './SelectsCard';

const Selects = () => {

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'> 
        <SelectsCard bg={BoraBora} text='Bora Bora'/>
        <SelectsCard bg={Maldives} text='Maldives'/>
        <SelectsCard bg={KeyWest} text='KeyWest'/>
        <SelectsCard bg={Jamaica} text='Jamaica'/>
        <SelectsCard bg={Cozumel} text='Cozumel'/>
        <SelectsCard bg={Antigua} text='Antigua'/>
    </div>
  )
}

export default Selects