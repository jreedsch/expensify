import moment from 'moment';

// filter views
const getVisibleExpensesX = (expenses, filters) => {
  console.log("IN getVisibleExpenses, expenses: "+expenses);
  console.log("IN getVisibleExpenses, filters: "+filters);
}

export const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
      //console.log("expense: "+JSON.stringify(expense));
      //console.log("startDate: "+startDate);
      //console.log("endDate: "+endDate);
      //console.log("expense.createdAt: "+expense.createdAt);
      //console.log("text: "+text);
      //console.log("expense.description.toLowerCase(): "+expense.description.toLowerCase());
      //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //disregard if not a number
      //const endDateMatch   = typeof endDate !== 'number' || expense.createdAt <= endDate;

      const createdAtMoment = moment(expense.createdAt);

      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch   = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;


      let textMatch        = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

      //console.log("textMatch: "+textMatch);

      return startDateMatch && endDateMatch && textMatch;
    }
  ).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount? 1 : -1;
    }
  })
}

//export default getVisibleExpenses;

// sum up all expense amounts
export const getExpenseTotal = (expenses) => {

  //const expenseAmount = expenses.map((expense) => {
  //  return expense.amount;
  //})
  //return expenseAmount.reduce((acc, val) => {
  //  return acc + val;
  //}, 0);

  return expenses
         .map((expense) => expense.amount)
         .reduce((sum,value) => sum + value, 0);
}
