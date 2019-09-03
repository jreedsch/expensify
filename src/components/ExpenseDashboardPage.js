import React from 'react';
import ExpenseListPage from './ExpenseListPage';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => ( //implicit return
  <div>
    <p>expense dashboard page </p>
    <ExpenseListFilters />
    <ExpenseListPage />

  </div>
);

export default ExpenseDashboardPage ;
