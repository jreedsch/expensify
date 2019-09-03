// expense action generator tests

import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('create the remove expense action object', () => {
  const action = removeExpense({ id: 'abc123'});
  expect(action).toEqual({  //compare objects or arrays
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
})

test('create the edit expense action object', () => {
  const updates = {description: 'rent', note: 'August'};
  const action = editExpense('abc123', updates);
  expect(action).toEqual({  //compare objects or arrays
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {description: 'rent', note: 'August'}
  });
})

test('create the add expense action object for provided values', () => {
  //const uuid = uuid();
  const newExpense = { description: 'phone', note: 'July', amount: 100, createdAt: 1000 };
  const action = addExpense(newExpense );
  expect(action).toEqual({  //compare objects or arrays
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), ...newExpense }
  });
})

test('create the add expense action object for default values', () => {
  //const uuid = uuid();
  const newExpense = {};
  const action = addExpense(newExpense );
  expect(action).toEqual({  //compare objects or arrays
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
  });
})
