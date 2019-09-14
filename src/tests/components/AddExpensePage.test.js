import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage'; //use named export for unconnected component
import { expensesCase1 } from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn(); // addExpense //spy
  history = { push: jest.fn() }; //spy
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render add expense page correctly', () => {
  //const onSubmit = jest.fn(); //spy
  //const history = { push: jest.fn() }; //spy
  //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle submit of add expense data', () => {
  //const onSubmit = jest.fn();
  const expenseData = expensesCase1[1];
  //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseData);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenseData);
});

/*
test('should ', () => {
  const wrapper = shallow();
  expect(wrapper).
})
*/
