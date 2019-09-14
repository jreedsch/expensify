import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage'; //use named export for unconnected component
import { expensesCase1 } from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, expenseData;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  expenseData = expensesCase1[1];
  wrapper = shallow(<EditExpensePage
              editExpense={editExpense}
              removeExpense={removeExpense}
              history={history}
              expense={expenseData}/>);
});

test('should render edit expense page correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle submit of edit expense data', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseData);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenseData.id, expenseData);
});

test('should handle remove of an expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expenseData.id});
});

/*
test('should handle submit of add expense data', () => {
  //const onSubmit = jest.fn();
  //const history = { push: jest.fn() };
  const expenseData = expenses[1];
  //const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenseData);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenseData);
});

*/
/*
test('should ', () => {
  const wrapper = shallow();
  expect(wrapper).
})
*/
