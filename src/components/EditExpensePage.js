import React from 'react'
import ExpenseForm from "./ExpenseForm";
import { connect } from 'react-redux';
import { editExpense, removeExpense } from "../actions/expense";

const EditExpensePage = (props) => {
    return (
        <div>
            {props.expense.id}
            <h1>Expense Page</h1>
            {props.match.params.id}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push("/");
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push("/");
            }
            }>
                X
        </button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
    })
});

export default connect(mapStateToProps)(EditExpensePage);
