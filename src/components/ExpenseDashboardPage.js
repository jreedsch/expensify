import React from 'react';
import ExpenseListPage from './ExpenseListPage';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => ( //implicit return
  <div>
    <p>expense dashboard page </p>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseListPage />
  </div>
);

export default ExpenseDashboardPage ;
