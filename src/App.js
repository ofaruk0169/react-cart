import React from 'react';
import Greeter from './Greeter';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import MoodToggler from './MoodToggler';

function App() {
  return (
    <div>
      <Counter step={5}/>
      <Counter />
      <MoodToggler />
      <Navbar />
      <Greeter name="Omey" age="54" excitement={5}/>
      <Greeter name="Caren"excitement={2}/>
      <h1>hello from app</h1>
    </div>
  );
}

export default App;
