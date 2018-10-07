import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Stepper              from 'components/Steppers'
import CredentialsPanel     from './panels/CredentialsPanel'
import GenerateProofPanel   from './panels/GenerateProofPanel'
import DownloadMessagePanel from './panels/DownloadMessagePanel'
import GenerateHashPanel    from './panels/GenerateHashPanel'
import RegisterProofPanel   from './panels/RegisterProofPanel'
import SuccessPanel         from './panels/SuccessPanel'
import { styles }           from './styles.scss'

class DesktopView extends Component {
  renderContent() {
    const { panel } = this.props

    switch (panel) {
      case 1:
        return <CredentialsPanel />
      case 2:
        return <GenerateProofPanel />
      case 3:
        return <DownloadMessagePanel />
      case 4:
        return <GenerateHashPanel />
      case 5:
        return <RegisterProofPanel />
      case 6:
        return <SuccessPanel />
      default:
        break
    }

    return null
  }

  render() {
    const { panel } = this.props

    return (
      <div className={styles}>
        <div id="register-view">
          <div id="registration-form-container">
            <Stepper
              activeStep={panel - 1}
              steps={[
                'Your Public Key',
                'Enter Your Message',
                'Download Your Message',
                'Generate Timestamp',
                'Register Timestamp'
              ]}
            />
            <div id="registration-form">{this.renderContent()}</div>
          </div>
        </div>
      </div>
    )
  }
}

DesktopView.propTypes = {
  panel: PropTypes.number.isRequired
}

export default DesktopView
