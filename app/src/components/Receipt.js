import React from 'react';

import styles from '../style/styles'

class Receipt extends React.Component {

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

  render() {
    return (
      <div className="Receipt" style={styles.receiptStyle}>
        <div style={styles.iconStyle}>
          {this.getIcon(this.props.type)}
        </div>
        <div style={styles.detailsStyle}>
          <p>{this.props.vendor}</p>
          <p>${this.props.amount}</p>
          <p>{this.props.date}</p>
          <button type="button" style={styles.pillStyle}>{this.props.category}</button>
          <small>{this.props.description}</small>
        </div>
      </div>
    );
  }
}

export default Receipt;
