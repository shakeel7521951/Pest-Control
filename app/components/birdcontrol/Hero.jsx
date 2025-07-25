import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full bg-green-500 border-b-2 border-white">
       <div className="w-[95%] py-10 flex items-center justify-between mx-auto">
         <h1 className="text-4xl text-white ">Bird Control</h1>
        <p className="p-2 bg-green-400 text-xs flex gap-2 font-semibold text-white "><Link href="/">Home</Link>/<Link href="/">Bird Control</Link></p>
       </div>

    </div>
  )
}

export default Hero;