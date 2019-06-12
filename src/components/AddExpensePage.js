import React from 'react';
import ExpenseForm from "./ExpenseForm";
import { connect } from 'react-redux';
import { addExpense } from "../actions/expense";

const AddExpensePage = (props) => (
  <div>
    This is from my help component
    <ExpenseForm
      onSubmit={
        (expense) => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }
      }
    />
  </div>
);


// const AddExpensePage = (props) => (
//   <div>
//     <ExpenseForm
//       onSubmit={(expense) => {
//         props.dispatch(addExpense(expense));
//         props.history.push("/");
//       }
//       }
//     />
//   </div>
// );

export default connect()(AddExpensePage);
