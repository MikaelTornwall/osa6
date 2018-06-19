import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const notification = `New ancedote "${content}" has been added.`
    this.props.createAnecdote(content)
    this.props.notificationChange(notification)
    e.target.anecdote.value = ''
    setTimeout(() => this.props.notificationChange(null), 5000)
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
  createAnecdote,
  notificationChange
}

const ConnectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm
