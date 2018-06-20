// reducer
export default (state = { total: 0 }, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      state = { total: state.total + 1 }
      break
  }
  return state
}