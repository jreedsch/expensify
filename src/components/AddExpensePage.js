import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    console.log("IN AddExpensePage, add submitted.");
    this.props.addExpense(expense); //props.dispatch(addExpense(expense)); see mapDispatchToProps
    this.props.history.push('/');
  };

  render() {
    return (
        <div>
          <h3>add a new expense page</h3>
          <ExpenseForm onSubmit={this.onSubmit}/>
        </div>
    );
  }
}

/*
const AddExpensePage = (props) => ( //implicit return
  <div>
    <h3>add expense page</h3>
    <ExpenseForm onSubmit={(expense) => {
      console.log("IN AddExpensePage, add submitted.");
      props.onSubmit(expense); //props.dispatch(addExpense(expense)); see mapDispatchToProps
      props.history.push('/');
    }}/>
  </div>
);
*/

// makes testing the dispatch much easier
const mapDispatchToProps = (dispatch) => ({addExpense: (expense) => dispatch(addExpense(expense)) })
//{
//  return {
//    onSubmit: (expense) => dispatch(addExpense(expense))
//  }
//};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
