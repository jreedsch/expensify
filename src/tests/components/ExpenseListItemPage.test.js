import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItemPage from '../../components/ExpenseListItemPage'; //there is no connected version
import expenses from '../fixtures/expenses';

test('should render ExpenseListItemPage with test expense',() =>{
  const expense = expenses[0];
  const wrapper = shallow(<ExpenseListItemPage {...expense}  />);
  expect(wrapper).toMatchSnapshot();
})
