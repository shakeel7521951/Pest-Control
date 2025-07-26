import Heropigeons from '@/app/components/birdComponent/pigeonF/Heropigeons';
import EnquiryForm from '@/app/components/EnquiryForm';
import PickAPet from '@/app/components/home/PickAPet';
import React from 'react'

const page = () => {
  return (
    <div>
        <Heropigeons/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page;