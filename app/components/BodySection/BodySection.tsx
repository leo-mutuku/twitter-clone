import React from 'react'

const BodySection = () => {
  return (
    <div className='flex flex-col py-4 items-center justify-center gap-8 '>
        <div className='rounded-sm px-6 w-[75%] items-start justify-between' style={{"border":"solid 1px gray", "borderRadius":"10px" 
    }}>
            <div className='py-6  underline'><span className='text-underline'>About me </span></div>
            <p className=''>I have over 8years of experience in total. For the last 5years I've worked as a full-time software developer on Nodejs, React, and Spring Boot.</p>

            <p className=''>I believe in getting the work done in the shortest time possible and having my client review it. I advise my client on what to do if no plan provided. The aim is to reduce cost and deliver quality product.</p>

            <p className=''>I maintain a good reputation, and communicate to the point. In the event of a big time difference, my client comes first.</p>

            <p className=''>In the short term, I'm accepting frontend projects in NextJS, React18, and Figma as the prototyping tool.</p>

            <p className=''>In the long term, I'm accepting full-stack or backend Rest/GraphQL in Spring Boot or Nodejs.</p>

            <p className=''>Thank you for your time!</p>

        </div>
    </div>

  )
}

export default BodySection