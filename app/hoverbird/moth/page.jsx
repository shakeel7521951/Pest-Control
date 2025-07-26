import Heromoth from '@/app/components/birdComponent/mothF/Heromoth'
import EnquiryForm from '@/app/components/EnquiryForm'
import PickAPet from '@/app/components/home/PickAPet'
import React from 'react'

const page = () => {
  return (
    <div>
        <Heromoth/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page