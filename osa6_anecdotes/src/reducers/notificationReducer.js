const notification = 'This is the message.'

const notificationReducer = (state = notification, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    console.log('Action: ', action)
    return action.notification
  default:
    return state
  }
}

export const notificationChange = (notification) => {
  console.log('notificationChange function logs: ', notification)
  return {
    type: 'SET_NOTIFICATION',
    notification
  }
}

export default notificationReducer
