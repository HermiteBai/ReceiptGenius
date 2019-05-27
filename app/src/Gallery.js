import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

class Gallery extends React.Component {

  createReceipts(num) {
    var receipts = []
    for (var i = 0; i < num; i++) {
      receipts.push(
        <Col span={4}>
          <Card title="Card title" bordered={true} hoverable={true}>
            Card content
          </Card>
        </Col>
      );
    }
    return receipts;
  }

  render() {
    return (
      <div classNmae="Gallery" style={{ background: '#FFFFFF', padding: '30px', paddingBottom: 8 }}>
        <Row gutter={16}>
          {this.createReceipts(10)}
        </Row>
      </div>
    );
  }
}

export default Gallery;
