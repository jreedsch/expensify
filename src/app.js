import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
//import { getVisibleExpenses } from './selectors/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from  './actions/filters';
import { addExpense, removeExpense, editExpense } from './actions/expenses';

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

ReactDOM.render(jsx, document.getElementById('app'));
