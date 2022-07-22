import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Banner from "./Pages/Home/Sections/Banner/Banner/Banner";
import HeroSection from "./Pages/Home/Sections/Banner/HeroSection/HeroSection";
import UserFlow from "./Pages/Home/Sections/UserFlow/UserFlow";
import WhyUs from "./Pages/Home/Sections/WhyUs/WhyUs";
import Footer from "./Pages/Shared/Footer/Footer";
import CoreFeature from "./Pages/Home/Sections/CoreFeatures/CoreFeatures";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <HeroSection />
      <UserFlow />
      <CoreFeature />
      <WhyUs />
      <Footer />
    </div>
  );
}

export default App;
