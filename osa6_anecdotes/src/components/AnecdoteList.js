import React from 'react'
import Filter from './Filter'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteList extends React.Component {
  handleVote = (anecdote) => async () => {
    const id = anecdote.id
    const content = anecdote.content
    const notification = `Anecdote "${anecdote.content}" has been upvoted.`
    console.log('Anecdote: ', content)
    console.log('Id: ', id)
    console.log(notification)
    const newVote = await anecdoteService.update(anecdote)
    console.log("newVote:", newVote)
    this.props.addVote(newVote.id)
    this.props.notificationChange(notification)
    setTimeout(() => this.props.notificationChange(null), 5000)
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
  addVote,
  notificationChange
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
