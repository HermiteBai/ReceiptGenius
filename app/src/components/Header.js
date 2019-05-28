import React from 'react'

import styles from '../style/styles'

class Header extends React.Component {

  render() {
    return (
      <div classNmae="Header" style={styles.headerStyle}>
        <button class="btn" style={styles.buttonStyle}><i class="fa fa-plus"></i> Add Receipt</button>
        <small style={styles.totalStyle}>Report Total: <b>${this.props.total}</b></small>
      </div>
    );
  }
}

export default Header;
