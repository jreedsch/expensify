

// expense action generator tests
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';
import thunk from 'redux-thunk';
//import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { setExpenses, startSetExpenses, addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses';
import { expensesCase1 } from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = { auth: { uid } }; // if none then empty object {}

beforeEach((done) => {
  console.log("start beforeEach");
  const expensesData = {};
  expensesCase1.forEach(({id, note, description, amount, createdAt}) => {
    expensesData[id] = {note, description, amount, createdAt};
  })
  database.ref(`/users/${uid}/expenses`).set(expensesData).then(() => {
    console.log("end beforeEach");
    done();
  });
})

test('create the set expense action object', () => {
  const expenses = expensesCase1;
  const action = setExpenses(expenses);
  expect(action).toEqual({  //compare objects or arrays
    type: 'SET_EXPENSES',
    expenses
  });
});

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
  //const newExpense = { description: 'phone', note: 'July', amount: 100, createdAt: 1000 };
  console.log("expenses fixture data: "+expensesCase1);
  const newExpense = expensesCase1[0];

  const action = addExpense(newExpense); //addExpense
  expect(action).toEqual({  //compare objects or arrays
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), ...newExpense }
  });
})

// yarn add redux-mock-store
// Jest async test needs 'done'
test('add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  console.log("ADD EXPENSE: MOCK STORE CREATED");
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'test mouse',
    createdAt: 1564725600000
  };
    // chain promise from action creator
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    // is it in the store?
    const actions = store.getActions();  //get store actions (redux-mock-store)
    console.log("ADD EXPENSE: CREATE ACTION: "+JSON.stringify(actions[0]));

    //$$$ why does this terminate with the 'expect' ???
    //expect(actions[0].toEqual({
    //    type: 'ADD_EXPENSE',
    //    expense: { id: expect.any(String), ...expenseData }
    //}));
    console.log("ADD EXPENSE: ACTION WAS CREATED");

    // is it in the DB?
    // change this to a chained promise (see below)
    //database.ref(`expenses/${actions[0]expense.id}`).once('value').then((snapshot) => {
    //  expect(snapshot.val().toEqual(expenseData));
    //  done();
    //})
    const refstring = `/users/${uid}/expenses/${actions[0].expense.id}/`;
    console.log("ADD EXPENSE: CALL DB with query string: "+refstring);
    //return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    return database.ref(refstring).once('value');
  })
  .then((snapshot) => {
    console.log("ADD EXPENSE: CHECK DB SNAPSHOT: "+JSON.stringify(snapshot.val()));
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


test('should fetch database data', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses())
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses: expensesCase1
    });
  })
});

//$$$ see lecture 168 @ 9:00
test ('should remove expense froem Firebase', () => {

});

/*
test('2 add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  console.log("2 ADD EXPENSE: MOCK STORE CREATED");
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'test mouse',
    createdAt: 1564725600000
  };
    // chain promise from action creator
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    // is it in the store?
    const actions = store.getActions();  //get store actions (redux-mock-store)
    console.log("2 ADD EXPENSE: CREATE ACTION: "+JSON.stringify(actions[0]));
    //expect(actions[0].toEqual({
    //    type: 'ADD_EXPENSE',
    //    expense: { id: expect.any(String), ...expenseData }
    //}));
    console.log("2 ADD EXPENSE: ACTION WAS CREATED");
  });
});


test('add expense with default values to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
    // chain promise from action creator
  store.dispatch(startAddExpense(expenseDefaults))
  .then(() => {
    // is it in the store?
    const actions = store.getActions();  //get store actions (redux-mock-store)
    expect(actions[0].toEqual({
        type: 'ADD_EXPENSE',
        expense: { id: expect.any(String), ...expenseDefaults }
    }));
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val().toEqual(expenseDefaults));
    done();
  });

});


test('create the add expense action object for default values', () => {
  //const uuid = uuid();
  const newExpense = {};
  const action = addExpense(newExpense );
  expect(action).toEqual({  //compare objects or arrays
    type: 'ADD_EXPENSE',
    expense: { id: expect.any(String), description: '', note: '', amount: 0, createdAt: 0 }
  });
})
*/
