import expensesReducer from '../../reducers/expenses';
import { expensesCase1 } from '../fixtures/expenses';  //test data

test('should setup default expenses state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual(
    []
  );
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expensesCase1
  };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([...expensesCase1]);
});

test('should set one expense and remove any others', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expensesCase1[0]]
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state).toEqual([expensesCase1[0]]);
});

test('should add new expense', () => {
  const newExpense = {
    id: 4,
    description: 'Phone',
    note: '',
    amount: 500,
    createdAt: 1000  //$$$ test for default createdAt
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state).toEqual([...expensesCase1, newExpense]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expensesCase1[1].id
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state).toEqual([expensesCase1[0], expensesCase1[2]]);
});

test('should not remove expense if id does not exist', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state).toEqual(expensesCase1);
});


test('should edit expense by id', () => {
  const newDescription = 'whole wheat bread';
  const updates = {description: newDescription};
  const action = {
    type: 'EDIT_EXPENSE',
    id: expensesCase1[0].id,
    updates: updates
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state[0].description).toBe(newDescription);
});

test('should not edit expense if wrong id', () => {
  const newDescription = 'whole wheat bread';
  const updates = {description: newDescription};
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: updates
  };
  const state = expensesReducer(expensesCase1, action);
  expect(state).toEqual(expensesCase1); //original data is unchanged
});
