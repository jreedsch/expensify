import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { createStore } from 'redux';

// action generators return action objects
//const incrementCount = (payload = {}) =>  //default to {}

// if object is provided and doesn't include incrementBy, incrementBy defaults to 1
// if no object is provided, an empty object is the default, but empty object does not have incrementBy, so it defaults to 1
const incrementCount = ({ incrementBy = 1 } = {} ) =>
  ({type: 'INCREMENT',
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    incrementBy //incrementBy: incrementBy = input parm has same name
   }); //same as: => { return {type: 'INCREMENT'} }

// destructuring example
const add = ({a, b}) => {console.log(a); return a + b;}
console.log(add({a: 1, b: 2}));

const decrementCount = ({ decrementBy = 1 } = {} ) =>
  ({type: 'DECREMENT',
    decrementBy
   });

const setCount = ({ count }) =>  // no default because the parm is required
  ({type: 'SET',
    count
   });

const resetCount = () => ({type: 'RESET'}); // no parms
// end action generators



// 1st parm = function setting initial state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      //return { count: state.count + incrementBy};
      return { count: state.count + action.incrementBy};
      break;
    case 'DECREMENT':
      //const decrementCountBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      //return { count: state.count - decrementCountBy};
      return { count: state.count - action.decrementBy};
      break;
    case 'RESET':
      return { count: 0};
      break;
    case 'SET':
      return { count: action.count};
    default:
      return state;
  }

});
const unsubscribe = store.subscribe(() => {
  console.log("state: "+JSON.stringify(store.getState()));
})

store.dispatch({ type: 'INCREMENT', incrementBy: 5 });
//console.log("state: "+JSON.stringify(store.getState()));

// use action creator
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 2}));

store.dispatch({ type: 'DECREMENT', decrementBy: 1 });
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 5}));

store.dispatch({ type: 'SET', count: 100 });
store.dispatch(resetCount());
store.dispatch(setCount({ count: 1000 }));

store.dispatch({ type: 'DECREMENT', decrementBy: 2 });

store.dispatch({ type: 'RESET' });


unsubscribe();


//ReactDOM.render(<AppRouter />, document.getElementById('app'));
