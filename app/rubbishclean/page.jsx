import React from 'react'
import Hero from '../components/rubbishclean/Hero';
import RubbishClean from '../components/rubbishclean/RubbishClean';
import PickAPet from '../components/home/PickAPet';

const page = () => {
  return (
    <div>
        <Hero/>
        <RubbishClean/>
        <PickAPet/>
    </div>
  )
}

export default page;