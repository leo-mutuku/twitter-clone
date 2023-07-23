import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className="w-full h-full flex relative bg-black">
      <div className="max-w-screen-xl w-full h-full relative flex flex-row items-start text-white">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div
          className="w-2/4 flex flex-col py-4 px-4
        h-full min-h-screen border-r-[0.5px] 
        border-l-[0.5px] border-gray "
        >
          <h3 className="text-xl font-bold">Home</h3>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray h-32 relative flex flex-col">
            <div className="flex flex-row py-4 space-x-2">
            <div className="w-10 h-10 bg-white rounded-full"></div>
            <div className="flex flex-col  ">
              <div className="bg-black">
                <button className="hover:bg-white/50 rounded-full"><input className="bg-black/80 border-none outline-none w-full" type="text" placeholder="Everyone"/></button>
              </div>
              <div className="border-b[0.5px] border-gray/30">
                <input
                  type="text"
                  className="w-full h-full bg-black/30 outline-none border-none"
                  placeholder="What's happening?!"/>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="1/4 flex flex-row py-4">right section</div>
      </div>
    </main>
  );
}
