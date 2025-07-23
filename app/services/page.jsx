import React from 'react'
import Hero from '../components/service/Hero';
import Core_Services from '../components/service/Core_Services';
import Specialized_Services from '../components/service/Specialized_Services';
import Service_Packages from '../components/service/Service_Packages';
import Testimonials from '../components/service/Testimonials';

const services = () => {
  return (
    <div>
      <Hero/>
      <Core_Services/>
      <Specialized_Services/>
      <Service_Packages/>
      <Testimonials/>
</div>
  )
}

export default services;