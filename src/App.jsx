import "./App.css";
//import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About";
//import Contact from "./Components/Contact";
//import Skills from "./Components/Skill";
//import Work from "./Components/Work";
import BackToTop from "./Components/BackToTop";
import SocialRail from "./Components/SocialRails/SocialRail";
//import Education from "./Components/Education";
//import Achievements from "./Components/Achievements";
//import Leetcode from "./Components/Leetcode";

function App() {

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
    </>
  );
}

export default App;
