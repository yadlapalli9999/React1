import React from 'react'
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landing-page/LandingPage";
import IntroSection from "./components/intro-section/IntroSection";
import TourContainer from "./components/tours/TourContainer";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <React.Fragment>
        <Navbar/>
        <LandingPage/>
        <IntroSection/>
        <TourContainer/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
