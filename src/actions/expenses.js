// ACTION GENERATORS FOR STORE EXPENSES ATTRIBUTE
import uuid from 'uuid';
import database from '../firebase/firebase';

// return function, not object
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref('/expenses').push(expense) //return is for promise chaining in test
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
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
