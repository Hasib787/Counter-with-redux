import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import myLogger from './middlewares/myLogger'

const store = createStore(rootReducer, applyMiddleware(myLogger))

export default store
