import React from 'react';
import statestate from "./ExpenseList";
import ExpenseList from './ExpenseList';
import ExpenseListFilter from "./ExpenseListFilter";
const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component!
    <ExpenseList />
    <ExpenseListFilter />
  </div>
);

export default ExpenseDashboardPage;
