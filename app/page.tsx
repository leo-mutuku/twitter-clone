import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="w-full h-full flex relative bg-black">
      <div className='max-w-screen-xl w-full h-full relative flex text-white'>
      <Sidebar />
        {/* <div className=''>Home timeline</div>
        <div>right section</div> */}
      </div>
    </main>
  )
}
