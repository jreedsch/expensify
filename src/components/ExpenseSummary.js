import React from 'react';
import { connect } from 'react-redux';
import { getExpenseTotal, getVisibleExpenses } from '../selectors/expenses';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  return (
    <h1> viewing {expenseCount} {expenseWord} with amount {expenseTotal} </h1>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: getExpenseTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);
