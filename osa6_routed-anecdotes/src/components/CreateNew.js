import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const style = {
  button: {
    background: '#3f51b5',
    color: 'white',
    display: 'block',
    margin: 10
  },
  input: {
    margin: 10
  }
}

class CreateNew extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      author: '',
      info: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNew({
      content: this.state.content,
      author: this.state.author,
      info: this.state.info,
      votes: 0
    })
  }

  render() {
    return(
      <div>
        <Typography variant='title'>Create a new anecdote</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            style={style.input}
            name='content'
            label='Content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <TextField
            style={style.input}
            name='author'
            label='Author'
            value={this.state.author}
            onChange={this.handleChange}
          />
          <TextField
            style={style.input}
            name='info'
            label='Url for more info'
            value={this.state.info}
            onChange={this.handleChange}
          />
          <Button style={style.button} type='submit'>Create</Button>
        </form>
      </div>
    )

  }
}

export default CreateNew
