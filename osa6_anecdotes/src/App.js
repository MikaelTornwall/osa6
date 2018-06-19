import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

class App extends React.Component {

  render() {
    const { anecdote, notification } = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification store={notification} />
        <AnecdoteList store={anecdote} />
        <AnecdoteForm store={anecdote} />
      </div>
    )
  }
}

export default App
