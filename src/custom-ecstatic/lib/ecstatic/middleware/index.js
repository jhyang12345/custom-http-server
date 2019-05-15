import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import logger from 'redux-logger'

export default applyMiddleware(
    thunk,
    logger,
    loadingBarMiddleware()
)