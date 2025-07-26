import Herobedbus from '@/app/components/birdComponent/bedbugsF/Herobedbus'
import EnquiryForm from '@/app/components/EnquiryForm'
import PickAPet from '@/app/components/home/PickAPet'
import React from 'react'

const page = () => {
  return (
    <div>
        <Herobedbus/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page