import React from 'react';
import axios from 'axios';

import styles from '../style/styles';
import round from '../utils';
import url from '../config';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visibility : 'hidden'};
  }

  getIcon(type) {
    if (type === 'jpg') {
      return (
        <i className="far fa-file-image fa-7x"></i>
      );
    } else if (type === 'pdf') {
      return (
        <i className="fas fa-file-pdf fa-7x"></i>
      );
    } else {
      console.alert('Unrecognizable tyle!');
    }
  }

  mouseEnter = () => {
    this.setState({visibility : 'visible'});
  }

  mouseLeave = () => {
    this.setState({visibility : 'hidden'});
  }

  handleClick = (e, data) => {
    // access to e.target here
    console.log(data);
    axios.delete(url, {data: {_id: data}})
    .then(function (response) {
      console.log(response);
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="Receipt" style={styles.receiptStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div style={styles.iconStyle}>
          {this.getIcon(this.props.type)}
        </div>
        <div style={styles.detailsStyle}>
          <div onClick={(e)=>this.handleClick(e, this.props.id)}>
            <p>{this.props.vendor} <i className="fas fa-trash" style={{'visibility' : this.state.visibility}}></i></p>
          </div>
          <p>${round(this.props.amount, 2)}</p>
          <p>{this.props.date}</p>
          <button type="button" style={styles.pillStyle}>{this.props.category}</button>
          <small>{this.props.description}</small>
        </div>
      </div>
    );
  }
}

export default Receipt;
