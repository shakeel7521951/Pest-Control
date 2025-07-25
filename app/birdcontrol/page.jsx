import React from 'react'
import Hero from '../components/birdcontrol/Hero';
import Bird from '../components/birdcontrol/Bird';
import WhyChos from '../components/birdcontrol/WhyChos';
import Pesticide from '../components/birdcontrol/Pesticide';
import InputCard from '../components/birdcontrol/InputCard';


const page = () => {
  return (
    <div>
        <Hero/>
        <Bird/>
        <WhyChos/>
        <InputCard/>
        <Pesticide/>
    </div>
  )
}

export default page;