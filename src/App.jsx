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
      <div className="md:my-36 my-20 px-5 md:px-20">
        <h2 className="text-5xl font-[500] text-white">Browse by Category</h2>
      </div>
      <Wedding/>
      <Birthday/>
      <Corporate/>
      <Trending/>
      <div className="md:py-32 py-20 text-center">
        <h2 className="text-[2rem] md:font-normal font-[500] md:text-[5rem]">Capturing The Beauty <br /> Of Your Journey</h2>
      </div>
      <div className="md:px-20">
        <div className="h-[1px] w-full bg-white/70"></div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
