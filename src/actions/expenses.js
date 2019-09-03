// ACTION GENERATORS FOR STORE EXPENSES ATTRIBUTE

import uuid from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(), description, note, amount, createdAt
  }
});

export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

export const editExpense = (id, updates) => {
  console.log("IN action creator, id: "+id+", updates: "+JSON.stringify(updates));
  return (
    { type: 'EDIT_EXPENSE',
      id,
      updates
    }
  );
};

//export const editExpense = (id, updates) => ({
//  type: 'EDIT_EXPENSE',
//  id,
//  updates
//});
