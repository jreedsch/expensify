import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should create set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test('should create set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test('should create sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('should create sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
});

test('should create set text filter action object with provided value', () => {
  const action = setTextFilter('random text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'random text'
  })
});

test('should create set text filter action object with defaultvalue', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});
