import React from 'react'
import StudentProps from "./components/StudentProps";
import StudentStates from "./components/StudentStates";




function App() {
  return (
    <React.Fragment>
       <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
           <a href="/" className="navbar-brand">ReactJs State and Props</a>

       </nav>
        {/*<StudentProps name="Ganesh" age="23" degree="BTech"/>*/}
        {/*<StudentProps name="Nani" age="25" degree="BE"/>*/}
        <StudentStates/>
    </React.Fragment>
  );
}

export default App;
