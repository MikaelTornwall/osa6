import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
  handleChange = (event) => {
    const value = event.target.value
    console.log(value)
    this.props.filterChange(value)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        Filter <input
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  filterChange
}

const ConnectedFilter = connect(
  null,
  mapDispatchToProps
)(Filter)

export default ConnectedFilter
