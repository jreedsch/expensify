// expense action generator tests
import configureMockStore from 'redux-mock-store';
import database from '../firebase/firebase';
import thunk from 'redux-thunk';
//import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import { setExpenses, startSetExpenses, addExpense, startAddExpense, editExpense, removeExpense } from '../actions/expenses';
import { expensesCase1 } from './fixtures/expenses';

const createMockStore = configureMockStore([thunk]);
const uid = 'testuid';
const defaultAuthState = { auth: { uid } }; // if none then empty object {}

/*
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
});
*/

test('test async action', () => {
  const result = 'OK';
  expect(result).toBe('OK');
});

// yarn add redux-mock-store
// Jest async test needs 'done'
/*
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

*/

/*
test('#0 add default expense [to database] and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
            const result = 'OK';
  store.dispatch(startAddExpense(expenseData))
  .then(() => {

    const actions = store.getActions();  //get store actions (redux-mock-store)
    console.log("startAddExpense dispatched!, action: "+JSON.stringify(actions[0]));
       expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: { id: expect.any(String), ...expenseData }
      });

      //  expect(actions[0].expense.description).toBe('');

    done();
  });
});


*/

test('#1 add default expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  //console.log("ADD EXPENSE: MOCK STORE CREATED");
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    const actions = store.getActions();  //get store actions (redux-mock-store)
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: { id: expect.any(String), ...expenseData }
    });
    console.log("ADD DEFAULT EXPENSE: CREATE ACTION: "+JSON.stringify(actions[0]));
    const refstring = `/users/${uid}/expenses/${actions[0].expense.id}/`;
    //console.log("ADD EXPENSE: CALL DB with query string: "+refstring);
    return database.ref(refstring).once('value');
    done();
  })
  .then((snapshot) => {
    console.log("ADD DEFAULT EXPENSE: CHECK DB SNAPSHOT: "+JSON.stringify(snapshot.val()));
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('#1a add example expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  //console.log("ADD EXPENSE: MOCK STORE CREATED");
  const expenseData = {
    description: 'test expense',
    amount: 100,
    note: 'for testing purposes only',
    createdAt: 1564725600000
  };
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    const actions = store.getActions();  //get store actions (redux-mock-store)
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: { id: expect.any(String), ...expenseData }
    });
    console.log("ADD TEST EXPENSE: CREATE ACTION: "+JSON.stringify(actions[0]));
    const refstring = `/users/${uid}/expenses/${actions[0].expense.id}/`;
    //console.log("ADD EXPENSE: CALL DB with query string: "+refstring);
    return database.ref(refstring).once('value');
    done();
  })
  .then((snapshot) => {
    console.log("ADD TEST EXPENSE: CHECK DB SNAPSHOT: "+JSON.stringify(snapshot.val()));
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});





/*
test('#2 add expense with default values to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense(expenseDefaults))
  .then(() => {
    const actions = store.getActions();  //get store actions (redux-mock-store)
    expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: { id: expect.any(String), ...expenseDefaults }
    });
    const refstring = `/users/${uid}/expenses/${actions[0].expense.id}/`;
    return database.ref(refstring).once('value');
    done();
  })
  .then((snapshot) => {
    console.log("ADD DEFAULT EXPENSE: CHECK DB SNAPSHOT: "+JSON.stringify(snapshot.val()));
    expect(snapshot.val().toEqual(expenseDefaults));
    done();
  });

});

*/
