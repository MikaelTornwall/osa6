import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    const notification = `New ancedote ${content} has been added.`
    this.props.store.dispatch(
      createAnecdote(content)
    )
    this.props.store.dispatch(
      notificationChange(notification)
    )
    e.target.anecdote.value = ''
    setTimeout(() => {
      this.props.store.dispatch(
        notificationChange(null)
      )
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default AnecdoteForm
