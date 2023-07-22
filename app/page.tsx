import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center relative bg-black">
      <div className='max-w-screen-lg w-full h-full flex relative'>
        <section>left sidebar</section>
        <div>Home timeline</div>
        <section>right section</section>
      </div>
    </main>
  )
}
