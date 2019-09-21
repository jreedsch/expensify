import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { getExpenseTotal, getVisibleExpenses } from '../selectors/expenses';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} with amount <span>{formattedExpensesTotal }</span> </h1>
      <div className="page-header__actions">
        <Link to='/create' className='myLinkButton'>Add Expense</Link>
      </div>
      </div>
    </div>
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
