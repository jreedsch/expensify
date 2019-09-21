import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItemPage from './ExpenseListItemPage';
import { getVisibleExpenses, getExpenseTotal } from '../selectors/expenses';

// need 2 exports: unconnected version (here) from Jest, connected version(default) for runtime
export const ExpenseListPage = (props) => ( //implicit return
  <div className='content-container'>
    { /* <h3>expense list page for filter: {props.filters.text}</h3> */ }
    { /* }<h3>count: {props.expenses.length}   amount: {getExpenseTotal(props.expenses)} </h3> */ }
    <div className='list-header'>
       <div className='show-for-mobile'> {props.expenses.length} Expenses</div> { /* mobile only */}
       <div className='show-for-desktop'>Expense (count: {props.expenses.length})</div>
       <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {props.expenses.length === 0
        ? (<div className='list-item__empty'>
            <span>No expenses</span>
           </div>)
        : ( props.expenses.map((expense) => {
              return <ExpenseListItemPage key={expense.id} {...expense}  />;
            })
          )
      }
    </div>
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
