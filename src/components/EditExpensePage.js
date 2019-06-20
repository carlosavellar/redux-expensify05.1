import React from "react";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense, addExpense } from "../actions/expense";
import { connect } from 'react-redux';

const EditExpensePage = (props) => (
    <div>
        <h1>Edit </h1>
        {props.match.params.id}
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push("/");
            }}
        />
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }))
            props.history.push("/");
        }}>
            Remove
        </button>
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id
    })
});

export default connect(mapStateToProps)(EditExpensePage);