import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Menu from './components/Menu'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateNew'
import './App.css'

const style = {
  container: {
    margin: 20
  },
  subcontainer: {
    marginTop: 100
  }
}

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: null
    }
  }

  addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    this.setState({
      anecdotes: this.state.anecdotes.concat(anecdote),
      notification: `New anecdote "${anecdote.content}" by ${anecdote.author} has been added.`
      })
      setTimeout(() => {
        this.setState({
          notification: ''
        })
      }, 10000)
  }

  anecdoteById = (id) =>
    this.state.anecdotes.find(a => a.id === id)

  vote = (id) => () => {
    const anecdote = this.anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

    this.setState({ anecdotes })
  }

  render() {
    const anecdoteById = (id) => this.state.anecdotes.find(anecdote => anecdote.id === id)

    return (
      <div style={style.container}>
        <Router>
          <div>
              <Menu />
              <div style={style.subcontainer}>
              {this.state.notification && <Notification message={this.state.notification} />}
            </div>
          <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} /> } />
          <Route path="/anecdote/:id" render={({match}) =>
            <Anecdote anecdote={anecdoteById(match.params.id)} onClick={this.vote(match.params.id)}/>
          }
        />
          <Route path="/create-new" render={() =>
            this.state.notification
            ? <Redirect to="/" />
            : <CreateNew addNew={this.addNew}/> } />
          <Route path="/about" render={() => <About /> } />
          </div>
          </Router>
          <br />
        <Footer />
      </div>
    );
  }
}

export default App
