import React from 'react'
import Button from '../components/Button'
import '../styles/components/_started.scss'
function Started() {
  return (
    <div className="started flex  items-center text-center px-20 py-10 bg-[#F9F8F8] mr-2 lg:flex-row flex-col">
            <p className='flex-1 font-bold text-2xl lg:mb-0 mb-4'>Get started with lorem ipsum dolor sit amet consectetur.</p>
            <Button text={'Learn More'}/>
        </div>
  )
}

export default Started
