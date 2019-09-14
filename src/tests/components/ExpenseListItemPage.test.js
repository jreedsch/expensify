import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItemPage from '../../components/ExpenseListItemPage'; //there is no connected version
import { expensesCase1 } from '../fixtures/expenses';

test('should render ExpenseListItemPage with test expense',() =>{
  const expense = expensesCase1[0];
  const wrapper = shallow(<ExpenseListItemPage {...expense}  />);
  expect(wrapper).toMatchSnapshot();
})
