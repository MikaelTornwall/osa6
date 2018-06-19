import React from 'react'
import addVote from '../reducers/anecdoteReducer'
import notificationChange from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => () => {
    console.log('Anecdote: ', anecdote.content)
    console.log('Id: ', anecdote.id)
    const notification = `Anecdote ${anecdote.content} has been upvoted.`
    this.props.store.dispatch(
      addVote(anecdote.id)
    )
    this.props.store.dispatch(
      notificationChange(notification)
    )
    setTimeout(() => {
      this.props.store.dispatch(
        notificationChange(null)
      )
    }, 5000)
  }

  render() {
    const anecdotes = this.props.store
    console.log('Anekdootit: ', anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
