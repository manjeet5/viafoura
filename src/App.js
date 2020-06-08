import React from 'react';
import './App.css';
import Posts from "./Posts";
import {mockPostsList} from "./mockdata";
function App() {
  return (
    <div className="App">
      <Posts list={mockPostsList}/>
    </div>
  );
}

export default App;
