import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  onSubmitEdit = (expense) => {
    console.log("IN EditExpensePage, edit submitted, expense: "+JSON.stringify(expense));
    console.log("this.props 1: "+JSON.stringify(this.props));
    console.log("edit expense to submit:  "+JSON.stringify(expense));
    console.log("edit expense id to submit:  "+this.props.expense.id);
    this.props.editExpense(this.props.expense.id, expense); //(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemoveButtonClick = (event) => {
    console.log("this.props 2: "+JSON.stringify(this.props));
    this.props.removeExpense({id: this.props.expense.id}); //this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/');
  };

//        <p> edit expense page for id {this.props.match.params.id}</p>
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmitEdit}
        />
        <button onClick={ this.onRemoveButtonClick } >Remove!</button>
      </div>
    )
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  removeExpense: (data) => dispatch(startRemoveExpense(data)), //dispatch(removeExpense(data)),
  editExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});
  //removeExpense: (id) => dispatch(removeExpense({ id })) }

//const mapDispatchToProps = (dispatch) => ([
//  {editExpense: (id, expense) => dispatch(editExpense(id, expense)) },
//  {removeExpense: (id) => dispatch(removeExpense({ id })) }
//]);

/*
const EditExpensePage = (props) => {
  console.log("IN EditExpensePage, props: "+JSON.stringify(props)); //props from react-router
  return (
    <div>
      <p> edit expense page for id {props.match.params.id}</p>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log("IN EditExpensePage, edit submitted, expense: "+JSON.stringify(expense));
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={(event) => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove!</button>
    </div>
  );
};

*/

//$$$ const mapStateToProps = (state, props) => ( { expense: state.expenses.find((expense) =>  expense.id === props.match.params.id) } );
const mapStateToProps = (state, props) => {
  const editExpense = state.expenses.find((expense) =>  expense.id === props.match.params.id);
  console.log("IN EditExpensePage.mapStateToProps, state: "+JSON.stringify(state));
  console.log("IN EditExpensePage.mapStateToProps, props: "+JSON.stringify(props));
  console.log("IN EditExpensePage.mapStateToProps, editExpense: "+JSON.stringify(editExpense));
  return { expense:  editExpense };
};



/*
const mapStateToProps = (state, props) => {
  return {
    //expense: state.expenses.find((expense) => {
    //  return expense.id === props.match.params.id;
    //})
    expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
  };
};
*/

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage) ;
