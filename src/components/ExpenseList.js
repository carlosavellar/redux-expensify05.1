import React from 'react';
import { connect } from "react-redux";
import selectedExpenses from "../selectors/expense";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
    <div>
        {props.expenses.map((expense) => <ExpenseListItem
            key={expense.id}
            {...expense}
        />)}
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);