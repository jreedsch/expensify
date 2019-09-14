import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListPage } from '../../components/ExpenseListPage';
import { expensesCase1 } from '../fixtures/expenses';

test('should render ExpenseListPage with test expenses',() =>{
  const filters = { text: ''};
  const wrapper = shallow(<ExpenseListPage expenses={expensesCase1} filters={filters} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListPage with no expenses',() =>{
  const filters = { text: ''};
  const wrapper = shallow(<ExpenseListPage expenses={[]} filters={filters} />);
  expect(wrapper).toMatchSnapshot();
})
