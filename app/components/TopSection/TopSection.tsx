import Image from 'next/image'
import React from 'react'
import profile from '../../profile.jpg'
import {BsGit, BsLinkedin, BsYoutube} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillCode} from 'react-icons/ai'
import { RxVercelLogo } from 'react-icons/rx'
import Link from 'next/link'

const profile_icons_size = 25;
const TopSection = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='border-solid radius  py-3 flex flex-row'>
            <Image className=" border-r-black rounded-full " src={profile} alt='profile_picture' />
            <div className='flex flex-row' style={{"position":"relative", "color":"cornflowerblue;","marginTop":"40%","marginLeft":"-10%"}}>
                <div>< RxVercelLogo size={profile_icons_size} /> </div>
                <div>Vercel</div>
            </div>

        </div>
        <div className='flex flex-col items-center justify-center py-3'>
            <div className='font-family ui-serif Georgia Cambria '>Leonard Mutuku</div>
            <div className='font-sm'>Software Developer</div>
        </div>
        <div className='flex flex-row items-center justify-center gap-6 py-3'>
            <div><Link href="https://github.com/leo-mutuku/leo-mutuku" target='_blank' className=''>
                     <BsGit size={profile_icons_size}/>
                </Link>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/leonard-m-a38b58b9/" target='_blank' className=''>
                    <BsLinkedin size={profile_icons_size}/>
                </Link>
            </div>
            <div>
                <Link href="https://github.com/leo-mutuku/leo-mutuku" target='_blank' className=''>
                    <AiFillTwitterCircle size={profile_icons_size} />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TopSection