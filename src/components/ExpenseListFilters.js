import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount,sortByDate, setStartDate, setEndDate } from  '../actions/filters';
import { DateRangePicker } from 'react-dates';

// dispatch is set on props by react-redux
export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    console.log("IN ExpenseListFilters.onFocusChange");
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    //const ndx = e.target.selectedIndex; //can use e.target.value
    //if (ndx === 0) {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">

          <div className="input-group__item">
            <input
              className="text-input"
              placeholder="Search descriptions"
              type='text'
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>

          <div className="input-group__item">
            <select
              className="text-input"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value='date'>Date</option>
              <option value='amount'>Amount</option>
            </select>
          </div>

          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates={true}
            />
          </div>
        </div>
      </div>
    ); // end return
  }; //end render
}; //end class

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

const mapStateToProps = (state) => ( {filters: state.filters} ); //implicit return
//const mapStateToProps = (state) => {   //explicit return
//  return {
//    filters: state.filters
//  };
//};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
