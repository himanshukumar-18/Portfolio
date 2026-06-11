import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skill";
import Work from "./Components/Work";
import BackToTop from "./Components/BackToTop";
import SocialRail from "./Components/SocialRail";
import Education from "./Components/Education";
import Achievements from "./Components/Achievements";
import Leetcode from "./Components/Leetcode";

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
          <Nav />
        </div>

        {/* inner text */}
        <Hero />
      </div>

      {/* about page */}
      <About />

      {/* skills section */}
      <Skills />

      {/* education section */}
      <Education />

      {/* work section */}
      <Work />

      {/* Achievements & Certifications */}
      <Achievements/>

      {/* Leetcode section */}
      <Leetcode />

      {/* hire me */}
      <Contact />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
