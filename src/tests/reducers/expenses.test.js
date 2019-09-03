import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';  //test data

test('should setup default expenses state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual(
    []
  );
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
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id does not exist', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should edit expense by id', () => {
  const newDescription = 'whole wheat bread';
  const updates = {description: newDescription};
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: updates
  };
  const state = expensesReducer(expenses, action);
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
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses); //original data is unchanged
});
