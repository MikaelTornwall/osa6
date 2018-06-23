import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const style = {
  paper: {
    padding: 15
  },
  card: {
    maxWidth: 300
  }
}

const About = () => (
  <Grid container spacing={24}>
    <Grid item xs={6}>
      <Paper>
        <div style={style.paper}>
    <Typography variant="headline">About anecdote app</Typography>
    <Typography variant="subheading">According to Wikipedia:</Typography>

    <Typography variant="caption" paragraph>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</Typography>

    <Typography variant="caption">Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</Typography>
      </div>
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Card style={style.card}>
        <CardMedia>
          <img src="http://static1.uk.businessinsider.com/image/58e382bb3a6b5726008b49a3-480/tim-berners-lee-web-inventor.jpg" width="300"/>
        </CardMedia>
        <CardContent>
          Tim Berners-Lee
        </CardContent>
      </Card>
    </Grid>
  </Grid>
)

export default About
