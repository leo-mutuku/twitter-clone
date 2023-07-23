import Image from 'next/image'
import Link from 'next/link'
import { type } from 'os'
import { BiHomeCircle, BiUser,BiEnvelope} from 'react-icons/bi'
import CodeWithLeo from "../../public/images/codewithleo.png"
            
import { BsBell,BsBookmark, BsThreeDots} from 'react-icons/bs'
import { HiOutlineHashtag} from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'

const NAVIGATION_ITEMS = [
  // {
  //   title:"Twitter",
  //   icon:BsTwitter
  // },
  {
    title:"CodeHive",
    icon:BiHomeCircle
  },
  {
    title:"Explorer",
    icon:HiOutlineHashtag
  },
  {
    title:"Proects",
    icon:BsBell
  },
  {
    title:"Languages",
    icon:BiEnvelope
  },
  {
    title:"Stacks",
    icon:BsBookmark
  },
  {
    title:"Premium",
    icon:BiUser
  },
]


const Sidebar = () => {
  return (
    <section className='fixed w-[275px] items-center h-full  flex flex-col '>
    <div className='items-start   space-y-4 my-4'>
      <div className='rounded flex flex-row text-xl items-center justify-center space-x-2'>
        <div><Image src={CodeWithLeo} alt='CodeWithLeo' className='w-[35px] rounded'/>
        </div>
        <div>
          CodeWithLeo
        </div></div>
      {NAVIGATION_ITEMS.map((item)=>{
        return(
          <Link className="hover:bg-white/10 duration-200 transation flex text-lg w-fit rounded-3xl space-x-4 px-6 py-2" href={`/${item.title.toLocaleLowerCase}`} key={item.title}>

            <item.icon/>
            {item.title!=="Twitter" && <div>{item.title}</div>}
            
          </Link>
        )
      })}
      <button className='w-full 
      rounded-3xl bg-primary 
      px-4 py-2 text-2xl
      text-center hover:bg-opacity-70 transition
      duration-200'>
        Tweet
      </button>
      </div>
      <div className='flex flex-col-reverse'>
      <button className='
      rounded-full m-4 bg-transparent
      flex items-center space-x-2
      p-4 text-lg text-center hover:bg-opacity-70
      transition duration-200'>
        <div className='
        rounded-full bg-slate-400 w-8 h-8 bg-white'>

        </div>
        <div className='text-xs'>
          <div>club of Colder</div>
          <div>@clubofcolderom</div>
        </div>
        <div><BsThreeDots/></div>
      </button>
      </div>
    </section>
  )
}

export default Sidebar