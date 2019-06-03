// Teste Undo COmmit
import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expense";
import { connect } from 'react-redux'

const AddExpensePage = (props) => (
  <div>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }
      }
    />
  </div>
);

export default connect()(AddExpensePage);
