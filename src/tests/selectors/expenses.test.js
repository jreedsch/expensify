import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';  //test data


test('should filter expenses on description by text value in date order', () => {
  const filters = {
    text: 'i',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]); //in date order
});

test('should filter expenses on start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(3, 'days'),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2]]); //in date order
});

test('should filter expenses on end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(1, 'days'),
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0],expenses[1]]); //in date order
});

test('should sort expenses array by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2],expenses[0],expenses[1]]); //in date order
});


test('should sort expenses array by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0],expenses[1],expenses[2]]); //in date order
});
