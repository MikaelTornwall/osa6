const notification = null

const notificationReducer = (state = notification, action) => {
  switch (action.type) {
  case 'SET_NOTIFICATION':
    console.log('Action: ', action)
    return action.notification
  default:
    return state
  }
}

export const notify = (notification, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: null
      })
    }, time)
  }
}

export default notificationReducer
