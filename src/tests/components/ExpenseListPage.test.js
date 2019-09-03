import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListPage } from '../../components/ExpenseListPage';
import expenses from '../fixtures/expenses';

test('should render ExpenseListPage with test expenses',() =>{
  const filters = { text: ''};
  const wrapper = shallow(<ExpenseListPage expenses={expenses} filters={filters} />);
  expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListPage with no expenses',() =>{
  const filters = { text: ''};
  const wrapper = shallow(<ExpenseListPage expenses={[]} filters={filters} />);
  expect(wrapper).toMatchSnapshot();
})
