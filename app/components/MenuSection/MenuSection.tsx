import Link from 'next/link'
import React from 'react'

const MenuSection = () => {
  return (
    <div className='flex flex-row items-center justify-center md:gap-8 xs:gap-8 py-4 md:font-xs'> 
         <Link href=""><div>Personal Info</div></Link>
         <Link href=""><div>Experience</div></Link>
         <Link href=""><div>Top Skills</div></Link>
         <Link href=""><div>Reviews</div></Link>
    </div>
  )
}

export default MenuSection