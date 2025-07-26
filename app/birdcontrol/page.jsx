import React from 'react'
import Hero from '../components/birdcontrol/Hero';
import Bird from '../components/birdcontrol/Bird';
import WhyChos from '../components/birdcontrol/WhyChos';
import PickAPet from '../components/home/PickAPet';




const page = () => {
  return (
    <div>
        <Hero/>
        <Bird/>
        <WhyChos/>       
        <PickAPet/>
    </div>
  )
}

export default page;