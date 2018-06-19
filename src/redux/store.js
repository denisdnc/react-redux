/** dependencies */
import { createStore } from "redux"
import reducer from './add-one-reducer'

/** store configs */
const initialState = { total: 0 }
const store = createStore(reducer, initialState)

export default store