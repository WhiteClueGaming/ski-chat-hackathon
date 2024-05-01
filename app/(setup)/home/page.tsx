import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="w-full p-4 h-full bg-[#313338]">
      <div className="w-full bg-[#2B2D31] rounded-md px-16 px-8 flex flex-col items-center justify-center h-[20rem] md:h-[15rem]">
        <p className="text-4xl text-zinc-400 font-bold pb-4">
          Welcome to SkiChat
        </p>
        <p className="md:w-1/2">
          Ski provides a medium for students and developers to interact easily
          with each other
        </p>

        <a href="/"><button className="mt-4 bg-indigo-500 px-4 py-2 rounded-md">Launch Ski</button></a>
      </div>

      <p className="text-4xl text-zinc-400 font-bold pb-4 mt-4 pl-2">Benefits</p>
      <div className="mt-4 w-full flex flex-wrap">
        
        <div className="p-2 w-full md:w-1/3">
          <div className="p-4 bg-[#2B2D31] rounded-md h-[10rem] overflow-scroll">
            <p className="text-4xl text-zinc-400 font-bold pb-4">
              One-to-One
            </p>
            <p className="w-1/2">
              One-to-one chat between students and developers
            </p>
          </div>
        </div>

        <div className="p-2 w-full md:w-1/3">
          <div className="p-4 bg-[#2B2D31] rounded-md h-[10rem] overflow-scroll">
            <p className="text-4xl text-zinc-400 font-bold pb-4">
              Interactive
            </p>
            <p className="w-1/2">
              Students and developers can interact with each other
            </p>
          </div>
        </div>

        <div className="p-2 w-full md:w-1/3">
          <div className="p-4 bg-[#2B2D31] rounded-md h-[10rem] overflow-scroll">
            <p className="text-4xl text-zinc-400 font-bold pb-4">
              Video Calls
            </p>
            <p className="w-1/2">
              Students and developers can connect via video calls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
