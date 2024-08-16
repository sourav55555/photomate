import Birthday from "./components/birthday/Birthday"
import Corporate from "./components/corporate/Corporate"
import Footer from "./components/footer/Footer"
import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/navbar/Navbar"
import Trending from "./components/trending/Trending"
import Wedding from "./components/wedding/Wedding"

function App() {

  return (
    <div className="bg-black poppins text-white">
      <Navbar />
      <HeroSection/>
      <div className="my-36 px-20">
        <h2 className="text-5xl font-[500] text-white">Browse by Category</h2>
      </div>
      <Wedding/>
      <Birthday/>
      <Corporate/>
      <Trending/>
      <div className="py-32 text-center">
        <h2 className="text-[5rem]">Capturing The Beauty <br /> Of Your Journey</h2>
      </div>
      <div className="px-20">
        <div className="h-[1px] w-full bg-white/70"></div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
