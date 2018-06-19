import React from 'react'
import ReactDOM from 'react-dom'

/** redux */
import { Provider } from "react-redux";
import store from './redux/store'

/** components */
import AddOne from './components/AddOne'
import Total from './components/Total'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddOne />
      <Total />
    </div>
  </Provider>, document.getElementById('app')
)
