import { getVisibleExpenses, getExpenseTotal } from '../../selectors/expenses';
import moment from 'moment';
import { expensesCase1, expensesCase2, expensesCase3 } from '../fixtures/expenses';  //test data


test('should filter expenses on description by text value in date order', () => {
  const filters = {
    text: 'i',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expensesCase1 , filters);
  expect(result).toEqual([expensesCase1 [2], expensesCase1 [1]]); //in date order
});

test('should filter expenses on start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(3, 'days'),
    endDate: undefined
  };

  const result = getVisibleExpenses(expensesCase1, filters);
  expect(result).toEqual([expensesCase1[2]]); //in date order
});

test('should filter expenses on end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(1, 'days'),
  };

  const result = getVisibleExpenses(expensesCase1, filters);
  expect(result).toEqual([expensesCase1[0],expensesCase1[1]]); //in date order
});

test('should sort expenses array by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expensesCase1, filters);
  expect(result).toEqual([expensesCase1[2],expensesCase1[0],expensesCase1[1]]); //in date order
});


test('should sort expenses array by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expensesCase1, filters);
  expect(result).toEqual([expensesCase1[0],expensesCase1[1],expensesCase1[2]]); //in date order
});


test('should total all expenses', () => {
  const result = getExpenseTotal(expensesCase1);
  expect(result).toEqual(expensesCase1[2].amount + expensesCase1[1].amount + expensesCase1[0].amount );
});

test('should total expenses when none exist', () => {
  const result = getExpenseTotal(expensesCase2);
  expect(result).toBe(0);
});

test('should total expenses when only one exists', () => {
  const result = getExpenseTotal(expensesCase3);
  expect(result).toBe(expensesCase3[0].amount);
});
