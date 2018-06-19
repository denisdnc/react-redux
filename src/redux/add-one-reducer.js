export default (state, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      state = { total: state.total + 1 }
      break
  }
  return state
}