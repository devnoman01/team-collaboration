import "./App.css";
import UserFlow from "./Pages/Home/Sections/UserFlow/UserFlow";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import CoreFeature from "./Pages/Home/Sections/CoreFeatures/CoreFeatures";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <UserFlow></UserFlow>
      <CoreFeature></CoreFeature>
      <Footer></Footer>
    </div>
  );
}

export default App;
