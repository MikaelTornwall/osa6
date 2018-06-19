const filterReducer = (state = '', action) => {
  switch (action.type) {
  case 'FILTER_CHANGE':
    console.log('Action value is: ', action.value)
    state = action.value
    console.log('Returns: ', state)
    return state
  default:
    return state
  }
}

export const filterChange = (value) => {
  console.log('This is the value: ', value)
  return {
    type: 'FILTER_CHANGE',
    value
  }
}

export default filterReducer
