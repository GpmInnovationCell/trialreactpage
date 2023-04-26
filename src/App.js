import React from "react";
import Cloud from "./Components/Cloud/Cloud";
import Data from "./Components/Data/Data";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
      <div>
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
      <Footer />
      </div>
  );
}

export default App;
