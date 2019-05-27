import React from 'react';

import Gallery from './Gallery'
import Header from './Header'

import './App.css';

const galleryStyle = {
  'float': 'down',
}

function App() {

  return (
    <div className="App">
      <Header total={12345.67}></Header>
      <Gallery></Gallery>
    </div>
  );
}

export default App;
