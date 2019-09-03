import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';
import { Link }  from 'react-router-dom';
import moment from 'moment';

//const ExpenseListItemPage = (props) => ( //implicit return
//const ExpenseListItemPage = ({dispatch, description, amount, createdAt, id}) => { //destructured, from caller's spread operator
const ExpenseListItemPage = ({description, amount, createdAt, id}) => { //destructured, from caller's spread operator
//export const ExpenseListItemPage = ({description, amount, createdAt, id}) => { //destructured, from caller's spread operator
  const createdAtMoment = moment(createdAt).format("MMM Do YYYY");
  return (
    <div>
      <p><Link to={`/edit/${id}`}>{description}</Link></p>
      <p>amount: {amount}, createdAt: {createdAtMoment}</p>



    </div>
  );
};

//      <button onClick={(event) => {dispatch(removeExpense({id}))}}>Remove!</button>

//    <p>description: {props.expense.description} amount: {props.expense.amount} createdAt: {props.expense.createdAt}</p>


// just get dispatch from connect
//export default connect()(ExpenseListItemPage);
export default ExpenseListItemPage;
