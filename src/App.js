import React from 'react';
import './App.css';
import PlaneImage from './components/PlaneImage/PlaneImage'

function App() {
  return (
    <div className="App">
      <PlaneImage qs='Hello World' host='Imgur'/>
    </div>
  );
}

export default App;
