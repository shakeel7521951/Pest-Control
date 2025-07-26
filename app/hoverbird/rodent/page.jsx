import HeroRodent from '@/app/components/birdComponent/rodentF/HeroRodent';
import EnquiryForm from '@/app/components/EnquiryForm';
import PickAPet from '@/app/components/home/PickAPet';
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroRodent/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page;