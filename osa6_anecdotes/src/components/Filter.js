import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import PropTypes from 'prop-types'

class Filter extends React.Component {
  handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    this.context.store.dispatch(
      filterChange(value)
    )
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

Filter.contextTypes = {
  store: PropTypes.object
}

export default Filter
