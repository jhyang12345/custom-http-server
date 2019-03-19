import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'
import { loadingBarMiddleware } from 'react-redux-loading';

export default applyMiddleware(
    thunk,
    logger,
    loadingBarMiddleware(),
)