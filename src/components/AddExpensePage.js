// Teste Undo COmmit
import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { addStarExpense } from "../actions/expense";

class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addStarExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStarExpense: (expense) => dispatch(addStarExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
