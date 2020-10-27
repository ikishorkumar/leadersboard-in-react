import React from 'react';
import Student from './Components/Student.js';
import './App.css';
import Data from './data.json'

function App() {
  
  return (
    <div className="App">
    <h1>Leaders Board</h1>
    {
      Data.map((student, index)=>{
        return (
          <Student key={index} name={student.name} university={student.university} score={student.score} />
        )
      })
    }
    </div>
  );
}

export default App;
