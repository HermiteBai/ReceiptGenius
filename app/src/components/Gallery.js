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
      if (this.props.receipts[i]) {
        cards.push(
            <Receipt vendor={this.props.receipts[i].vendor}
                     amount={parseFloat(this.props.receipts[i]['amount'])}
                     date={this.props.receipts[i]['date']}
                     category={this.props.receipts[i]['category']}
                     type={this.props.receipts[i]['type']}
                     description={this.props.receipts[i]['description']}
                     bordered={true}
                     id={this.props.receipts[i]['_id']}
                     key={i}>
            </Receipt>
        );
      }
    }
    return cards;
  }

  render() {
    
    return (
      <div className="Gallery" style={{ background: '#FFFFFF', padding: '30px', paddingBottom: 8 }}>
        <StackGrid columnWidth={200} horizontal={true}>
            {this.createReceipts(this.props.receipts.length)}
        </StackGrid>
      </div>
    );
  }
}

export default Gallery;
