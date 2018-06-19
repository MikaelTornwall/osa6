import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      color: 'green',
      marginBottom: 10
    }
    return (
      <div style={style}>
        {this.props.notification}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps,
  null
)(Notification)

export default ConnectedNotification
