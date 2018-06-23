import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

const style = {
  card: {
    maxWidth: 500,
    marginLeft: 30
  },
  button: {
    border: '1px solid #3f51b5',
    color: '#3f51b5',
    marginLeft: 10
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none'
  }
}

const Anecdote = ({ anecdote, onClick }) => {
  console.log("Anecdote: ", anecdote)
  return (
  <Card style={style.card}>
    <CardContent>
    <Typography variant="title" color="textPrimary">{anecdote.content}</Typography>
    <Typography variant="body1" color="textSecondary">By: {anecdote.author}</Typography>
    <Typography variant="body1" color="textSecondary">More info: <a href={anecdote.info} target="_blank" style={style.link}>{anecdote.info}</a></Typography>
    </CardContent>
    <CardActions>
      <IconButton style={style.button} onClick={onClick}>
      {anecdote.votes}
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Anecdote
