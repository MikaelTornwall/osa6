import React from 'react'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import PropTypes from 'prop-types'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => () => {
    const id = anecdote.id
    const content = anecdote.content
    const notification = `Anecdote "${anecdote.content}" has been upvoted.`
    console.log('Anecdote: ', content)
    console.log('Id: ', id)
    console.log(notification)

    this.context.store.dispatch(
      addVote(id)
    )

    this.context.store.dispatch(
      notificationChange(notification)
    )

    setTimeout(() => {
      this.context.store.dispatch(
        notificationChange(null)
      )
    }, 5000)
  }

  render() {
    const { anecdote, filter } = this.context.store.getState()
    console.log('Anekdootit: ', anecdote)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdote.filter(a => a.content.toLowerCase().indexOf(filter.toLowerCase()) > -1).sort((a, b) => b.votes - a.votes).map(anecdote =>
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

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
