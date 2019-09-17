const expensesReducerDefaultState = [];

//export default (state = expensesReducerDefaultState, action) => {
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  console.log("IN expense reducer, state: "+JSON.stringify(state));
  console.log("IN expense reducer, action: "+JSON.stringify(action));
  switch (action.type) {
    case 'ADD_EXPENSE':
      console.log("IN expenses reducer, add expense: ");
      console.log({...action.expense});
      return [ ...state, action.expense ] //state.concat(action.expense);

    case 'SET_EXPENSES': //wipe state expenses
      console.log("IN expenses reducer SET_EXPENSES, expenses: ");
      console.log({...action.expenses});
      return action.expenses;  //[ ...state, ...action.expenses ]
      //return state;

    case 'LOAD_EXPENSES': //wipe state expenses
      console.log("IN expenses reducer LOAD_EXPENSES, expenses: ");
      console.log({...action.expenses});
      return action.expenses;  //[ ...state, ...action.expenses ]

    case 'REMOVE_EXPENSE':
      console.log("IN expenses reducer REMOVE_EXPENSE, id: "+action.id);
      //return state.filter((expense) => { return expense.id !== action.expense.id});
      //return state.filter(( {id} ) => { return id !== action.id});
      return state.filter(( {id} ) => id !== action.id );

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
          if (expense.id === action.id) {
            console.log("IN expense reducer, expense: "+JSON.stringify(expense));
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

export default expensesReducer;
