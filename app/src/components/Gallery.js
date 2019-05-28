import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

class Gallery extends React.Component {

  constructor(props) {
      super(props);
      this.state = {receipts: this.props.receipts};
    }

  createReceipts(num) {
    var cards = []
    for (var i = 0; i < num; i++) {
      cards.push(
        <Col span={4}>
          <Card title={this.state.receipts[i]['vendor']} bordered={true} hoverable={true}>
            ${this.state.receipts[i]['amount']}
          </Card>
        </Col>
      );
    }
    return cards;
  }

  render() {
    const receipts = this.props.receipts;

    return (
      <div classNmae="Gallery" style={{ background: '#FFFFFF', padding: '30px', paddingBottom: 8 }}>
        <Row gutter={16}>
          {this.createReceipts(receipts.length)}
        </Row>
      </div>
    );
  }
}

export default Gallery;
