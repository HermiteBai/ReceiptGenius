import React from 'react';
import { Modal, Upload, Button, Radio, Input, InputNumber, DatePicker, message } from 'antd';
import axios from 'axios';

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
        checkedRadio: '',
        date: '',
        vendor: '',
        description: '',
        type: '',
      };
  }

  handleOk = e => {

    this.setState({
      visible: false,
    });

    const data = {
      'vendor' : this.state.vendor,
      'date' : this.state.date,
      'amount' : this.state.value,
      'category' : this.state.checkedRadio,
      'type' : this.state.type,
      'description' : this.state.description,
    }

    axios.post('http://localhost:4000', data)
      .then(function (response) {
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleCancel = e => {

    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onUploadChange = info => {
    var name = info.file.name;
    if (name.endsWith('pdf')) {
      this.setState({type: 'pdf'});
    } else if (name.toLowerCase().endsWith('jpg')
            || name.toLowerCase().endsWith('png')) {
      this.setState({type: 'jpg'});
    }

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

  onRadioChange = (e) => {
    if (e.target.value === this.state.checkedRadio) {
      this.setState({checkedRadio: ''});
    } else {
      this.setState({checkedRadio: e.target.value});
    }
  }

  onRadioClick = (e) => {
    this.setState({
      checkedRadio: '',
    });

    const tag = e.target.value;
    if (this.state.value === tag) {
      this.setState({
        checkedRadio: '',
      });
    } else {
      this.setState({checkedRadio: e.target.value});
    }
  }

  onDateChange = (e) => {
    var month = e._d.getMonth() + 1 < 10 ? "0" + (e._d.getMonth() + 1) : e._d.getMonth() + 1;
    var day = e._d.getDate() < 10 ? "0" + e._d.getDate() : e._d.getDate();
    var year = e._d.getFullYear();
    var result = month + "/" + day + "/" + year;
    this.setState({date: result});
  }

  onVendorChange = (e) => {
    this.setState({vendor: e.nativeEvent.target.value});
  }

  onDescriptionChange = (e) => {
    this.setState({description: e.nativeEvent.target.value});
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
            accept='.jpg,.pdf,.png'
            onChange={this.onUploadChange}
          >
            <Button>Browse</Button>
          </Upload>
          <p style={{'visibility' : this.state.isNoFileUploadedVisible}}>No file selected</p>
          Vendor/Retailer*
          <Input onChange={this.onVendorChange}/>
          Transaction date*
          <br />
          <DatePicker
            format={dateFormat}
            onChange={this.onDateChange}
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
          <div onClick={this.onRadioClick}>
            <Radio.Group size="small" value={this.state.checkedRadio}>
              <Button value="Supplies" shape='round' size='small' style={{marginRight: '10px'}}>Supplies</Button>
              <Button value="Subscriptions" shape='round' size='small' style={{marginRight: '10px'}}>Subscriptions</Button>
              <Button value="Personal" shape='round' size='small' style={{marginRight: '10px'}}>Personal</Button>
            </Radio.Group>
          </div>
          Description
          <br />
          <TextArea rows={4} onChange={this.onDescriptionChange}/>
        </Modal>
      </div>
    );
  }
}

export default Header;
