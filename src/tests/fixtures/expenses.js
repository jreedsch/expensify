import moment from 'moment';

export default [
    {
      id: 1,
      description: 'bread',
      note: '',
      amount: 395,
      createdAt: 0
    },
    {
      id: 2,
      description: 'milk',
      note: '',
      amount: 250,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: 3,
      description: 'spinach',
      note: '',
      amount: 110,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
];
