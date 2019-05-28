import React from 'react';

import Gallery from './components/Gallery'
import Header from './components/Header'
import receipts from './mock/mockdata'

import './App.css';

function App() {
  var total = 0;
  for (var i = 0; i < receipts.length; i++) {
    var increase = receipts[i]['amount'];
    total += increase;
  }

  return (
    <div className="App">
      <Header total={total}></Header>
      <Gallery receipts={receipts}></Gallery>
    </div>
  );
}

export default App;
