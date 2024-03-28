// import viteLogo from "/vite.svg";
import "./App.css";
import DiscoverMore from "./sections/DicoverMore";
import Faq from "./sections/FAQ/Faq";
import Header from "./sections/Header/Header";
import Navbar from "./sections/Layout/Navbar";
import NewCaseStudies from "./sections/NewCaseStudies";
import NoOfProjects from "./sections/NoOfProjects";
import RealWorldExperience from "./sections/RealWordExperience";
import WhatTheyAreTalkingAbout from "./sections/WhatTheyAreTalkingAbout";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RealWorldExperience />
      <NewCaseStudies />
      <DiscoverMore />
      <Faq />
      <WhatTheyAreTalkingAbout />
      <NoOfProjects />
    </div>
  );
}

export default App;
