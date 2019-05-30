import React from 'react';
import { Modal, Upload, Button, Radio, Input, InputNumber, DatePicker, message } from 'antd';

import styles from '../style/styles';

const dateFormat = 'MM/DD/YYYY';

const { TextArea } = Input;

class Header extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        visible : false,
        value : 0,
        isNoFileUploadedVisible : 'visible',
      };
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onChange = info => {
    this.setState({isNoFileUploadedVisible: 'hidden',});
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      this.setState({isNoFileUploadedVisible: 'visible',});
    } else if (info.file.status === 'removed') {
      this.setState({isNoFileUploadedVisible: 'visible',});
    }
  }

  render() {

    return (
      <div className="Header" style={styles.headerStyle}>
        <button className="btn" style={styles.buttonStyle} onClick={this.showModal}><i className="fa fa-plus"></i> Add Receipt</button>
        <small style={styles.totalStyle}>Report Total: <b>${this.props.total}</b></small>
        <Modal
          title="Add Receipt"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Add Receipt"
          okButtonProps={{ type: 'default' }}
        >
          Receipt File*
          <br />
          <Upload
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            accept='.jpg,.pdf'
            onChange={this.onChange}
          >
            <Button>Browse</Button>
          </Upload>
          <p style={{'visibility' : this.state.isNoFileUploadedVisible}}>No file selected</p>
          Vendor/Retailer*
          <Input />
          Transaction date*
          <br />
          <DatePicker
            format={dateFormat}
          />
          <br />
          Receipt total($USD)*
          <br />
          <InputNumber
            defaultValue={0}
            value={this.state.value}
            formatter={value => `$ ${value}`}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            onChange={value => this.setState({value: parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})}
          />
          <br />
          Category
          <br />
          <Radio.Group defaultValue="Supplies" size="small">
            <Radio.Button value="Supplies">Supplies</Radio.Button>
            <Radio.Button value="Subscriptions">Subscriptions</Radio.Button>
            <Radio.Button value="Personal">Personal</Radio.Button>
          </Radio.Group>
          <br />
          Description
          <br />
          <TextArea rows={4} />
        </Modal>
      </div>
    );
  }
}

export default Header;
