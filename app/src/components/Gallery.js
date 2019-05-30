import React from 'react';
import StackGrid from "react-stack-grid";

import 'antd/dist/antd.css';

import Receipt from './Receipt'

class Gallery extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        receipts: this.props.receipts,
      };
  }

  createReceipts(num) {
    var cards = []
    for (var i = 0; i < num; i++) {
      cards.push(
          <Receipt vendor={this.state.receipts[i]['vendor']}
                   amount={this.state.receipts[i]['amount']}
                   date={this.state.receipts[i]['date']}
                   category={this.state.receipts[i]['category']}
                   type={this.state.receipts[i]['type']}
                   description={this.state.receipts[i]['description']}
                   bordered={true}
                   key={i}>
            ${this.state.receipts[i]['amount']}
          </Receipt>
      );
    }
    return cards;
  }

  render() {
    const receipts = this.props.receipts;

    return (
      <div className="Gallery" style={{ background: '#FFFFFF', padding: '30px', paddingBottom: 8 }}>
        <StackGrid columnWidth={200} horizontal={true}>
            {this.createReceipts(receipts.length)}
        </StackGrid>
      </div>
    );
  }
}

export default Gallery;
