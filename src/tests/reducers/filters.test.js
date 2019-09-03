import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { setTextFilter } from '../../actions/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined,
    {type: 'SORT_BY_AMOUNT'}
  );
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  // date is default, so change it first
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = {
    type: 'SORT_BY_DATE'
  };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter to input value', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'random value'
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('random value');
});

test('should set start date to today', () => {
  const today = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate: today
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(today);
});

test('should set end date to today', () => {
  const today = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate: today
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(today);
});

test('chain action creator and reducer for text filter', () => {
  const action = setTextFilter('random value');
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('random value');
});
