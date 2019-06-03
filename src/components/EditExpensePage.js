
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from "../components/ExpenseForm";
import { removeExpense, editExpense } from "../actions/expense";
const EditExpensePage = (props) => (
    <div>
        <h1>Exdpense Page</h1>
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
        }}>
            del
        </button>
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
    })
});

export default connect(mapStateToProps)(EditExpensePage);
