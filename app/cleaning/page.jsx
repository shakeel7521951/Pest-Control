import React from 'react'
import Contractcleaning from '../components/cleaning/Contractcleaning';
import Hero from '../components/cleaning/Hero';
import PickAPet from '../components/home/PickAPet';

const page = () => {
  return (
    <div>
        <Hero/>
        <Contractcleaning/>
        <PickAPet/>
    </div>
  )
}

export default page;