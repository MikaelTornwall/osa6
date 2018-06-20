import React from 'react'
import Filter from './Filter'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => async () => {
    const id = anecdote.id
    const content = anecdote.content
    const notification = `Anecdote "${anecdote.content}" has been upvoted.`
    console.log('Anecdote: ', content)
    console.log('Id: ', id)
    console.log(notification)
    this.props.vote(anecdote)
    this.props.notify(notification, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.visibleAnecdotes
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  if (filter === '') {
    return anecdotes
  }
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().indexOf(filter.toLowerCase()) > -1)
}

const mapDispatchToProps = {
  vote,
  notify
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state.anecdote, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList
