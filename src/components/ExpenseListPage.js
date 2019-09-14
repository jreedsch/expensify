import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItemPage from './ExpenseListItemPage';
import { getVisibleExpenses, getExpenseTotal } from '../selectors/expenses';

// need 2 exports: unconnected version (here) from Jest, connected version(default) for runtime
export const ExpenseListPage = (props) => ( //implicit return
  <div>
    <h3>expense list page for filter: {props.filters.text}</h3>
    <h3>count: {props.expenses.length}   amount: {getExpenseTotal(props.expenses)} </h3>
    {props.expenses.length === 0
      ? (<p>No expenses</p>)
      : (<p>expenses count: {props.expenses.length}</p>)
    }
    {props.expenses.map((expense) =>
            ( <ExpenseListItemPage key={expense.id} {...expense}  /> )
    )}
  </div>
);
//       ( <ExpenseListItemPage key={ndx} expense={expense} ndx={ndx} /> )

// this is a HOC

/*
const ConnectedExpenseListPage = connect((state) => {
  return {expenses: state.expenses};
})(ExpenseListPage);

export default ConnectedExpenseListPage;
*/

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListPage);
