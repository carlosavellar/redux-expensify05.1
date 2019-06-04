import React from 'react';
import selectedTotal from "../selectors/expensesTotal";
import { connect } from 'react-redux'

const ExpensesSumary = (props) => (
    <div>
        <h1>Viewing {props.expenses.length} totaling {selectedTotal(props.expenses)}</h1>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpensesSumary);

