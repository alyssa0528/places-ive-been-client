import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const attractionsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ATTRACTIONS":
      return action.attractions;
    default:
      return state;
  }
}

const reducers = combineReducers({
  attractions: attractionsReducer
})

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleware)
  )
)
