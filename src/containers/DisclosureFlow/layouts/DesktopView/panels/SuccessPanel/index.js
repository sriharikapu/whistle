import React, { Component } from 'react'
import { withRouter }       from 'react-router-dom'
import { styles }           from './styles.scss'

class SuccessPanel extends Component {
  render() {
    return (
      <div className={styles}>
        <div className="notification">
          <h2>Congratulations! Whistle blown!</h2>
        </div>
      </div>
    )
  }
}

export default withRouter(SuccessPanel)
