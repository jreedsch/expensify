import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage'; //use named export for unconnected component
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn(); //spy
  history = { push: jest.fn() }; //spy
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render add expense page correctly', () => {
  //const onSubmit = jest.fn(); //spy
  //const history = { push: jest.fn() }; //spy
  //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle submit of add expense data', () => {
  //const onSubmit = jest.fn();
  //const history = { push: jest.fn() };
  const expenseData = expenses[1];
  //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseData);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenseData);
});

/*
test('should ', () => {
  const wrapper = shallow();
  expect(wrapper).
})
*/
