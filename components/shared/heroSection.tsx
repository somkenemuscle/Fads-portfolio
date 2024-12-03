import { FloatingDockDemo } from "./Dock"
import SlideIn from "./SlideIn"
function HeroSection() {
  return (
    <SlideIn direction="top">
      <div className="xl:px-36 sm:px-32">
        <div className="relative isolate px-6 pt-14 lg:px-8">

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                MUAZU <span className="text-blue-400">FADHILULLAHI</span> ABDULKADIR
              </h1>
              <p className="mt-6 text-lg  font-light leading-8 ">
                I'm a <span className="text-gray-500 font-bold">Smart Contractor Developer</span> and aspiring auditor, driven by a passion for building and securing the web3 ecosystem. My 
                mission is to deliver secure and efficient smart contracts that empower the decentralized future.
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <FloatingDockDemo />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >

          </div>
        </div>

      </div>
    </SlideIn>

  )
}

export default HeroSection