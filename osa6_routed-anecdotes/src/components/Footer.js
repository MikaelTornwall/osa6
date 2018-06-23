import React from 'react'

const style = {
  footer: {
    background: '#3f51b5',
    color: 'white',
    padding: 30,
    borderRadius: 10
  },
  link: {
    color: '#9A9A9A',
    textDecoration: 'none'
  }
}

const Footer = () => (
  <div style={style.footer}>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749' style={style.link}>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes' style={style.link}>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
  </div>
)

export default Footer
