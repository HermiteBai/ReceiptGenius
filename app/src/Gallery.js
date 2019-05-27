import React from 'react';
import { Card, Col, Row } from 'antd';
import 'antd/dist/antd.css';

class Gallery extends React.Component {

  render() {
    return (
      <div classNmae="Gallery" style={{ background: '#FFFFFF', padding: '30px', paddingBottom: 8 }}>
        <Row gutter={16}>
          <Col span={4}>
            <Card title="Card title" bordered={true} hoverable={true}>
              Card content
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={4}>
            <Card bordered={true} hoverable={true}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;
