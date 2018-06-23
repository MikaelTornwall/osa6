import React from 'react'

const style = {
  background: '#121930',
  borderRadius: 10,
  color: 'white',
  padding: 10,
  marginBottom: 10
}

const Notification = ({ message }) => (
  <div style={style}>
    {message}
  </div>
)

export default Notification
