// import viteLogo from "/vite.svg";
import "./App.css";
import DiscoverMore from "./sections/DicoverMore";
import Faq from "./sections/FAQ";
import Header from "./sections/Header/Header";
import Footer from "./sections/Layout/Footer/Footer";
import Navbar from "./sections/Layout/Navbar";
import LeadingMarket from "./sections/LeadingMarket/LeadingMarket";
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
      <LeadingMarket />
      <NewCaseStudies />
      <DiscoverMore />
      <Faq />
      <WhatTheyAreTalkingAbout />
      <NoOfProjects />
      <Footer />
    </div>
  );
}

export default App;
