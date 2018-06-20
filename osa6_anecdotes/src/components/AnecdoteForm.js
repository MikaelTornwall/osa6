import React from 'react'
import { create } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const notification = `New ancedote "${content}" has been added.`
    e.target.anecdote.value = ''
    this.props.create(content)
    this.props.notify(notification, 5000)
  }

  render() {
    return (
      <div>
        <h2>Create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  create,
  notify
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
