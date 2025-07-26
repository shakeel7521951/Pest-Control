import Herofox from '@/app/components/birdComponent/foxF/Herofox';
import EnquiryForm from '@/app/components/EnquiryForm';
import PickAPet from '@/app/components/home/PickAPet';
import React from 'react'

const page = () => {
  return (
    <div>
        <Herofox/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page;