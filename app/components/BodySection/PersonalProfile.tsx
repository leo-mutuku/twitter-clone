import React from 'react'

const PersonalProfile = () => {
  return (
    <div className='flex flex-col py-4 items-center justify-center gap-8 '>
        <div className='rounded-sm px-6 w-[75%] items-start justify-between' style={{"border":"solid 1px gray", "borderRadius":"10px" 
    }}>
            <div className='py-6  underline'><span className='text-underline'>About me </span></div>
            <p className=''>Leonard Mutuku is a results-driven Developer with a passion for leveraging innovative strategies to drive brand growth and customer engagement in the ever-evolving digital landscape.</p>
            <p>I have over 8years of experience in total. For the last 5years I've worked as a full-time software developer on Nodejs, React, and Spring Boot.</p>
            <p>I believe in getting the work done in the shortest time possible and having my client review it. I advise my client on what to do if no plan provided. The aim is to reduce cost and deliver quality produc</p>
        </div>
    </div>

  )
}

export default PersonalProfile