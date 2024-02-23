import './App.css'
import { IntroSection, Navbar, OwnerSection } from './components'

function App() {

  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Slider Section */}
      <div className="flex w-full h-screen">
        <img src="/images/steam-1.jpg" alt="" className='object-cover md:min-w-96 w-full' />
        <div className="w-1/2">
          {/* Owner Section */}
          <OwnerSection />
          <div className="bg-slate-500 w-full h-full md:flex items-center justify-center hidden">
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="px-5 py-10">
        {/* <IntroSection /> */}
      </div>

    </div>
  )
}

export default App
