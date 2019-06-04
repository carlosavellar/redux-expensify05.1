// Teste Undo COmmit
import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSumary from "./ExpensesSymary";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList />
    <ExpenseListFilter />
    <ExpensesSumary />
  </div>
);

export default ExpenseDashboardPage;
