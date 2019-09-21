import React from 'react';
import ExpenseListPage from './ExpenseListPage';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => ( //implicit return
  <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseListPage />
    <p style={styles} >src/components/ExpenseDashboardPage.js</p>
  </div>
);

const styles = {
  fontSize: '10px',
  float: 'right'
}
export default ExpenseDashboardPage ;
