import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

const style = {
  list: {
    color: '#3f51b5',
    textDecoration: 'none'
  }
}

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <Typography variant="headline">Anecdotes</Typography>
    <List component="nav">
      {anecdotes.map(anecdote =>
          <Link style={style.list} to={`/anecdote/${anecdote.id}`}>
          <ListItem button key={anecdote.id} >{anecdote.content}</ListItem>
        </Link>
      )}
    </List>
  </div>
)

export default AnecdoteList
