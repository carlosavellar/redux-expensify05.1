import { connect } from 'react-redux'
import React from 'react'
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expense";

const EditExpensePage = (props) => (<div>
    {/* <div>
        {props.match.params.id}
    </div> */}
    <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
            props.dispatch(editExpense(expense));
            props.history.push("/");
        }}
    />
</div>
)

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);