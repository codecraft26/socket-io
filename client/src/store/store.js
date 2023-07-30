import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from '../reducers/userReducers';

const middleware = [thunk];

const reducer = combineReducers({
  user: userReducer
});

let initialState = {
  user: {
    isAuthenticated: false,
    loading: false,
    user: null,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;