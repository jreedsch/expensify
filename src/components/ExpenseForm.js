import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

//const now = moment();  today
//console.log(now.format('MMM Do, YYYY'));

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100) : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      err: ''
    };

  };

  onDescriptionChange = (e) => {
    const description = e.target.value; // or use event.persist()
    this.setState(() => ({ description }));  //es6 object shorthand
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));  //es6 object shorthand
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    const currencyRegex = '/^\d{1,}(\.\d{0,2})$/'; // ^ begins with
                                              // \d decimal
                                              // * any count, {1,} 1 to any
                                              // () optional
                                              // decimal point (escaped)
                                              // {0,2} from 0 to 2 decimals
                                              // $ end
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));  //es6 object shorthand
    } else {
      console.log("amount does not match regex filter: "+amount);
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCalendarFocusChange = ({focused}) => {
    this.setState(() => ({ calendarFocused: focused}));
  };

  onSubmitHandler = (e) => {
    console.log("SUBMIT, description="+this.state.description);
    e.preventDefault(); //no refresh
    if (!this.state.description || !this.state.description.length > 0) {
    //if (!this.state.description || !this.state.amount > 0) {
      this.setState(() => ({ err: 'description is required' }));
    } else if (!this.state.amount || !this.state.amount > 0) {
    //if (!this.state.description || !this.state.amount > 0) {
      this.setState(() => ({ err: 'amount is required' }));
    } else {
      this.setState(() => ({ err: '' }));
      console.log("IN ExpenseForm, state: "+JSON.stringify(this.state));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }

  }

  render() {
    return (
      <div>
        <h2>Expense Form </h2>
        {this.state.err && <p>{this.state.err}</p> }
        <form onSubmit={this.onSubmitHandler}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onCalendarFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder='Note'
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )

  }
}

export default ExpenseForm ;
