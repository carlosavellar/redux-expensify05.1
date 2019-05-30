import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expense";
import { connect } from 'react-redux'

const AddExpensePage = (props) => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(addExpense({ expense }));
        props.history.push("/");
      }
      }
    />
  </div>
);

const mapStateToProps = (state) => ({
  expense: state.expenses
});

export default connect(mapStateToProps)(AddExpensePage);
