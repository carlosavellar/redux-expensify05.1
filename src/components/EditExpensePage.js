
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from "../components/ExpenseForm";
import { setTextFilter } from "../actions/filter";
const EditExpensePage = (props) => (
    <div>
        <h1>Exdpense Page</h1>
        {props.match.params.id}
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(setTextFilter(expense))
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => ({
    filter: state.filters,
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
    })
});

export default connect(mapStateToProps)(EditExpensePage);
