import HeroCockroach from '@/app/components/birdComponent/coackroachesF/HeroCockroach';
import EnquiryForm from '@/app/components/EnquiryForm';
import PickAPet from '@/app/components/home/PickAPet';

import React from 'react'

const page = () => {
  return (
    <div>
      <HeroCockroach/>
      <EnquiryForm/>
      <PickAPet/>
    </div>
  )
}

export default page;