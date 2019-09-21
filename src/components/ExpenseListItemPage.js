import React from 'react';
//import { connect } from 'react-redux';
//import { removeExpense } from '../actions/expenses';
import { Link }  from 'react-router-dom';
import moment from 'moment';

//const ExpenseListItemPage = (props) => ( //implicit return
//const ExpenseListItemPage = ({dispatch, description, amount, createdAt, id}) => { //destructured, from caller's spread operator
const ExpenseListItemPage = ({description, amount, createdAt, id}) => { //destructured, from caller's spread operator
//export const ExpenseListItemPage = ({description, amount, createdAt, id}) => { //destructured, from caller's spread operator
  const createdAtMoment = moment(createdAt).format("MMM Do, YYYY");
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
    //minimumFractionDigits: 2
  });
  const moneyAmount = formatter.format(amount / 100);
  // or use numeral.js

  return (

      <Link className='list-item' to={`/edit/${id}`}>
          <h3 className='list-item__title'>{description}</h3>
          <span className='list-item__subtitle'>{createdAtMoment}</span>
          <span className='list-item__id'>{id}</span>
          <h3 className='list-item__data'>
            {moneyAmount}
          </h3>

      </Link>

  );
};

//      <button onClick={(event) => {dispatch(removeExpense({id}))}}>Remove!</button>

//    <p>description: {props.expense.description} amount: {props.expense.amount} createdAt: {props.expense.createdAt}</p>


// just get dispatch from connect
//export default connect()(ExpenseListItemPage);
export default ExpenseListItemPage;
