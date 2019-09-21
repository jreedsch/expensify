import moment from 'moment';

const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: moment().startOf('month'), endDate: moment().endOf('month')};

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {uid: action.uid};

    case  'LOGOUT':
      return {};

    default:
      return state;
  }
};
