import React from 'react'
import TourContainer from "./components/TourContainer";


function App() {
  return (
    <React.Fragment>
       <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
         <a href="/" className="navbar-brand">React with Bootstrap</a>
       </nav>
        <TourContainer/>
    </React.Fragment>
  );
}

export default App;
