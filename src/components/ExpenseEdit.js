import React from 'react'
import { connect } from 'react-redux'

const ExpenseEdit = (props) => (
    <div>
        {props.expense}
    </div>
);

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => {
        return expense.id === props.match.params.id;
    })
});
export default connect(mapStateToProps)(ExpenseEdit);
