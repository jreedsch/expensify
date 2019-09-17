import moment from 'moment';

export const expensesCase0 = [
    {
      id: 'ABC123',
      description: 'bread',
      note: '',
      amount: 300,
      createdAt: 0
    },
    {
      id: 'DEF456',
      description: 'milk',
      note: '',
      amount: 200,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: 'GHI789',
      description: 'spinach',
      note: '',
      amount: 100,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
];

export const expensesCase1 = [
    {
      id: '1',
      description: 'bread',
      note: '',
      amount: 300,
      createdAt: 0
    },
    {
      id: '2',
      description: 'milk',
      note: '',
      amount: 200,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: '3',
      description: 'spinach',
      note: '',
      amount: 100,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
];

export const expensesCase2 = [];

export const expensesCase3 = [
  {
    id: '3',
    description: 'spinach',
    note: '',
    amount: 100,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];
