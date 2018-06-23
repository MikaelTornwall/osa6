import React from 'react'
import { NavLink } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'

const style = {
  title: {
    color: 'white',
    marginRight: 15
  },
  item: {
    color: 'white',
    marginLeft: 15,
    paddingLeft: 10,
    paddingRight: 10,
    textDecoration: 'none'
  },
  itemActive: {
    background: '#121930',
    paddingTop: 23,
    paddingBottom: 22
  }
}


const Menu = () => (
  <div>
  <AppBar position="absolute">
      <Toolbar>
        <Typography variant="title" style={style.title}>
          Anecdotes App
        </Typography>
      <NavLink style={style.item} activeStyle={style.itemActive} exact to="/">Anecdotes</NavLink> &nbsp;
      <NavLink style={style.item} activeStyle={style.itemActive} to="/create-new">Create New</NavLink> &nbsp;
      <NavLink style={style.item} activeStyle={style.itemActive} to="/about">About</NavLink>
      </Toolbar>
    </AppBar>
  </div>
)

export default Menu
