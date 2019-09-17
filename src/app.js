import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
//import { getVisibleExpenses } from './selectors/expenses';
//import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from  './actions/filters';
import { startSetExpenses, startLoadExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

// initial data
import { expensesCase0 } from './tests/fixtures/expenses';

// needed for login/logout gymnastics
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

const myStore = configureStore();
//console.log('IN app.js, store: '+JSON.stringify(myStore.getState()));

//https://codechi.com/dev-tools/date-to-millisecond-calculators/
//const expenseOne = myStore.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1564725600000})); //Fri Aug 02 2019 00:00:00 GMT-0600
//const expenseTwo = myStore.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1565050000000})); //Mon Aug 05 2019 18:06:40 GMT-0600
//const expenseThree = myStore.dispatch(addExpense({description: 'Milk', amount: 50, createdAt: 1566050000000}));  //Sat Aug 17 2019 07:53:20 GMT-0600
//myStore.dispatch(setTextFilter('Rent'));

//watch data change
//setTimeout(() => {
//  myStore.dispatch(setTextFilter('Milk'));
//}, 5000);

//const visibleExpenses = getVisibleExpenses(myStore.getState().expenses, myStore.getState().filters);
//console.log("IN app.js, visible expenses for filter "+myStore.getState().filters.text+": "+JSON.stringify(visibleExpenses));

const jsx = (
  <Provider store={myStore}>
    <AppRouter />
  </Provider>
);

//ReactDOM.render('startup: loading database data', document.getElementById('app'));
//+ subsequent runs, DB loaded already
//+ myStore.dispatch(startSetExpenses()).then(() => {
//- first load of fixture data to DB
//- myStore.dispatch(startLoadExpenses(expensesCase0)).then(() => {
//  setTimeout(() => {  // to view loading message, not required
//    ReactDOM.render(jsx, document.getElementById('app'));
//  }, 1000);
//});


// initial redirects at app start time
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("IN app.js, user logged on: "+JSON.stringify(user));
    myStore.dispatch(login(user.uid));
    myStore.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    console.log("IN app.js, no user, logged off.");
    myStore.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
