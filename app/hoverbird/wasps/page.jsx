import Herowasps from '@/app/components/birdComponent/waspsF/Herowasps'
import EnquiryForm from '@/app/components/EnquiryForm'
import PickAPet from '@/app/components/home/PickAPet'
import React from 'react'

const page = () => {
  return (
    <div>
        <Herowasps/>
        <EnquiryForm/>
        <PickAPet/>
    </div>
  )
}

export default page