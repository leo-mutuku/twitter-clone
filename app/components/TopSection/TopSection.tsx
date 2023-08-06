import Image from 'next/image'
import React from 'react'
import profile from '../../profile.jpg'
import {BsGit, BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const profile_icons_size = 25;
const TopSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='border-solid radius  py-3'>
            <Image className=" border-r-black rounded-full " src={profile} alt='profile_picture' />
        </div>
        <div className='flex flex-col items-center justify-center py-3'>
            <div className='font-family ui-serif Georgia Cambria '>Leo Mutuku</div>
            <div className='font-sm'>Software Developer</div>
        </div>
        <div className='flex flex-row items-center justify-center gap-6 py-3'>
            <div><BsGit size={profile_icons_size}/></div>
            <div><BsLinkedin size={profile_icons_size}/></div>
            <div><AiFillTwitterCircle size={profile_icons_size} /></div>
        </div>
    </div>
  )
}

export default TopSection