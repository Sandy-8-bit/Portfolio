import "./App.css";
import ContactSection from "./Contact/Contact";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import HeroSections from "./Hero/Hero";
import HeroSection from "./HeroSection/HeroSection";
import ProjectList from "./ProjectList/ProjectList";
import Tech from "./Tech/Tech";
import TopNavBar from "./top-nav/topNav";
import Provide from "./What Can i Provide/Provide";
import Works from "./Works/Works";

function App() {
  return (
    <div className="Back-ground">
      <div>
        <TopNavBar />
        <HeroSections />
      </div>
      <div className="separator"></div>

      <div>
        <HeroSection />
      </div>

      <div className="separator"></div>

      <div>
        <ProjectList />
      </div>

      <div className="separator"></div>

      <div>
       <Tech/>
      </div>

      <div className="separator"></div>

      <div>
        <Provide />
      </div>

      <div className="separator"></div>

      <div>
        <Education />
      </div>
      <div className="separator"></div>

      <div>
        <Works />
        <ContactSection />
        <div className="separator"></div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
