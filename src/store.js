import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import attractions from './reducers/attractions';
import attractionFormData from './reducers/attractionFormData';

const reducers = combineReducers({
  attractions,
  attractionFormData
})

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)
  )
)
