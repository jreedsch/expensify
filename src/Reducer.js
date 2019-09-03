import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

/*
REMOVE_EXPENSE
EDIT_EXPENSE
SET_TEXT_FILTER
SORT_BY_DATE
SORT_BY_AMOUNT
SET_START_DATE
SET_END_DATE
*/

// ACTION generators
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(), description, note, amount, createdAt
  }
})
const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});
//const setStartDate = (startDate = undefined) => ({ //default is undefined
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// END ACTION generators


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log("add expense: ");
      console.log({...action.expense});
      return [ ...state, action.expense ] //state.concat(action.expense);
    case 'REMOVE_EXPENSE':
      //console.log("Id b: "+action.expense.id);
      //return state.filter((expense) => { return expense.id !== action.expense.id});
      //return state.filter(( {id} ) => { return id !== action.id});
      return state.filter(( {id} ) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
          if (expense.id === action.id) {
            return {...expense, ...action.updates}; //override existing attrs with updates object attrs
          } else {
            return expense;
          }
        }
      );
    default:
      return state;
  }
};

const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};

    case  'SORT_BY_DATE':
      return {...state, sortBy: action.sortBy};

    case  'SORT_BY_AMOUNT':
      return {...state, sortBy: action.sortBy};

    case  'SET_START_DATE':
      return {...state, startDate: action.startDate};

    case  'SET_END_DATE':
      return {...state, endDate: action.endDate};

    default:
      return state;
  }
};

// filter views
//const getVisibleExpenses = (expenses, filters) => {
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
      //console.log("expense: "+JSON.stringify(expense));
      //console.log("startDate: "+startDate);
      //console.log("text: "+text);
      //console.log("expense.description.toLowerCase(): "+expense.description.toLowerCase());
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //disregard if not a number
      const endDateMatch   = typeof endDate !== 'number' || expense.createdAt <= endDate;
      let textMatch        = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

      //console.log("textMatch: "+textMatch);

      return startDateMatch && endDateMatch && textMatch;
    }
  ).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount? 1 : -1;
    }
  })
}

const store = createStore(
  combineReducers(
    { expenses: expensesReducer,
      filters:  filtersReducer
    }
  )
);

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("state: "+JSON.stringify(state));
  console.log("visible expenses: "+JSON.stringify(visibleExpenses));
})

// expenses
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description: 'Milk', amount: 50, createdAt: 100}));
//console.log("expenseTwo : "+JSON.stringify(expenseTwo.expense.id) );
//store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {description: 'tea'} ));



store.dispatch(setStartDate(-2000));
//store.dispatch(setEndDate(1250));

store.dispatch(setTextFilter('Rent'));
store.dispatch(setTextFilter('Tea'));
store.dispatch(setTextFilter());
//store.dispatch(setStartDate());
//store.dispatch(setEndDate());

// filters
store.dispatch(sortByAmount());
store.dispatch(sortByDate());


/*
const demoState = {
  expenses: [
    { id: 'abcdefg',
      description: 'jan rent',
      note: 'payment',
      amount: 10000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
*/
