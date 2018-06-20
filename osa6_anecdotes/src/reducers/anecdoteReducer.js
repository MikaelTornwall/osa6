import anecdoteService from '../services/anecdotes'

const reducer = (store = [], action) => {
  if (action.type === 'CREATE') {
    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }
  if (action.type === 'VOTE') {
    console.log('Action type on: ', action.type)
    const old = store.filter(a => a.id !== action.id)
    const voted = store.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes + 1 } ]
  }

  return store
}

export const create = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content)
    dispatch({
      type: 'CREATE',
      data: anecdote
    })
  }
}

export const vote = (anecdote) => {
  return async (dispatch) => {
    const newVote = await anecdoteService.update(anecdote)
    dispatch({
      type: 'VOTE',
      id: newVote.id
    })
  }
}

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer
