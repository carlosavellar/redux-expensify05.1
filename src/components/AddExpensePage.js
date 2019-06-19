// Teste Undo COmmit
import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { connect } from 'react-redux'
import { addExpense } from "../actions/expense";
class AddExpensePage extends React.Component {

  render() {
    const { props, } = this;

    return (
      <div>
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push("/");
          }}
        />
      </div>
    );
  }
}

export default connect()(AddExpensePage);
