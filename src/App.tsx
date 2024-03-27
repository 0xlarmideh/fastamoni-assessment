// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./sections/Header/Header";
import Navbar from "./sections/Layout/Navbar";
import NewCaseStudies from "./sections/NewCaseStudies";
import RealWorldExperience from "./sections/RealWordExperience";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RealWorldExperience />
      <NewCaseStudies />
      <h5 className="bg-black text-white">hsd</h5>
    </div>
  );
}

export default App;
