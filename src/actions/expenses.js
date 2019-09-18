// ACTION GENERATORS FOR STORE EXPENSES ATTRIBUTE
import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// return function, not object
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return database.ref(`/users/${uid}/expenses`).push(expense) //return is for promise chaining in test
    .then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};


//export const removeExpense = ({ id } = {}) => {
export const removeExpense = ( id ) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
};

// load local store with database data
export const startRemoveExpense = ( {id} ) => {
  console.log("IN actions.startRemoveExpense id: "+id);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses/${id}`).remove()  //remove by internal id, not record key
    .then(() => {//return is for promise chaining in test
      dispatch(removeExpense(id));
    });
  }
};


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
// load local store with database data
export const startEditExpense = ( id, updates ) => {
  console.log("IN actions.startEditExpense id: "+id);
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses/${id}`).update(updates)  //remove by internal id, not record key
    .then(() => {//return is for promise chaining in test
      dispatch(editExpense(id, updates));
    });
  }
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// load local store with database data
export const startSetExpenses = () => {
  console.log("IN actions.startSetExpenses");
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`/users/${uid}/expenses`).once('value').then((snapshot) => {//return is for promise chaining in test
      const expenseData = [];
      snapshot.forEach((childSnapshot) => {
        expenseData.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setExpenses(expenseData));
    });
  }
};

// LOAD_EXPENSES
export const loadExpenses = (expenses) => ({
  type: 'LOAD_EXPENSES',
  expenses
});

// load sample database data (first time)
export const startLoadExpenses = (expenseData = {}) => {
  console.log("IN actions.startLoadExpenses");
  return (dispatch) => {
    return database.ref(`/users/${uid}/expenses`).set(expenseData) //return is for promise chaining in test
    .then((ref) => {
      dispatch(loadExpenses(expenseData));
    });
  }
};
