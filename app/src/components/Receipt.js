import React from 'react';

import styles from '../style/styles'

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

  render() {
    return (
      <div className="Receipt" style={styles.receiptStyle} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div style={styles.iconStyle}>
          {this.getIcon(this.props.type)}
        </div>
        <div style={styles.detailsStyle}>
          <p>{this.props.vendor} <i className="fas fa-trash" style={{'visibility' : this.state.visibility}}></i></p>
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
