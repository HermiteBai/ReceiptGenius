import React from 'react';
import axios from 'axios';

import Gallery from './components/Gallery';
import Header from './components/Header';
import receipts from './mock/mockdata';
import round from './utils';
import url from './config';

import './App.css';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        receipts: receipts,
        total: 0,
      };
  }

  componentDidMount() {
    axios.get(url, {
      headers: {"Access-Control-Allow-Origin": "*"}
    })
    .then(res => {
      var total = 0;
      for (var i = 0; i < res.data.data.length; i++) {
        var increase = Number(res.data.data[i]['amount']);
        total += increase;
      }

      this.setState({receipts: res.data.data, total: round(total, 2)})
    });
  }

  render() {

    return (
      <div className="App">
        <Header total={this.state.total}></Header>
        <Gallery receipts={this.state.receipts}></Gallery>
      </div>
    );
  }
}

export default App;
