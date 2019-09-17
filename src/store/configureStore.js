import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


// to use Redux devtools with Thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers(
      { expenses: expensesReducer,
        filters:  filtersReducer,
        auth:     authReducer
      }
    ),
    composeEnhancers(applyMiddleware(thunk)) //or...
    //for Redux web devtools (no async)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
