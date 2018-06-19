import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  render() {
    const style = {
      color: 'green'
    }
    return (
      <div style={style}>
        {this.context.store.getState().notification}
      </div>
    )
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
