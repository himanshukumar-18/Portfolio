import "./App.css";
//import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";
import BackToTop from "./Components/BackToTop";
import SocialRail from "./Components/SocialRails/SocialRail";
import Education from "./Components/Education/Education";
import Achievements from "./Components/Achievements/Achievements";
import { useSmoothScroll } from "./hook/useSmoothScroll";

function App() {
  // ✨ Premium inertia scroll — silky, slow, satisfying
  useSmoothScroll();

  return (
    <>
      {/* back to top  */}
      <BackToTop />

      {/* social rail */}
      <SocialRail />

      {/* hero page */}
      <div id="Home" className="heroPage w-full">
        <div className="navContainer">
          <Navbar />
        </div>

        {/* inner text */}
        <Hero />
      </div>

      {/* about */}
      <About />

      {/* education */}
      <Education />

      {/* skills */}
      <Skills />

      {/* work */}
      <Work />

      {/* achivement */}
      <Achievements />

      {/* contact */}
      <Contact />
    </>
  );
}

export default App;
