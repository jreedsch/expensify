import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import { expensesCase1 } from '../fixtures/expenses';
import moment from 'moment';

test('should render empty (new) expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render data-filled (editable) expense form correctly', () => {
  const testExpense = expensesCase1[0];
  const wrapper = shallow(<ExpenseForm expense={testExpense} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form data', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {preventDefault: () => {}}); //stub out the event parm
  expect(wrapper.state('err').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
const value = 'test description';
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('input').at(0).simulate('change', {
   //simulate event object
   target: {value}
 });
 expect(wrapper.state('description')).toBe(value);
})

test('should set description on textarea change', () => {
 const value = 'test Note';
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('textarea').simulate('change', {
   //simulate event object
   target: {value}
 });
 expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
 const value = '12.10';
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('input').at(1).simulate('change', {
   //simulate event object
   target: {value}
 });
 expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
  const value = '12.101';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    //simulate event object
    target: {value}
  });
  expect(wrapper.state('amount').length).toBe(0);
})

//spies use uses all expects with toHaveBeenCalled...
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  //expect(onSubmitSpy).toHaveBeenCalled();
  const wrapper = shallow(<ExpenseForm expense={expensesCase1[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {preventDefault: () => {}}); //stub out the event parm
  expect(wrapper.state('err')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({  //has no ID yet
    description: expensesCase1[0].description,
    amount: expensesCase1[0].amount,
    createdAt: expensesCase1[0].createdAt,
    note: expensesCase1[0].note
  });
});

test('should set new date on date change', () => {
 const wrapper = shallow(<ExpenseForm />);
 const now = moment();
 wrapper.find('SingleDatePicker').prop('onDateChange')(now)
 expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on focus change', () => {
 const wrapper = shallow(<ExpenseForm />);
 const focused = false;
 wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
 expect(wrapper.state('calendarFocused')).toBe(focused);
});
