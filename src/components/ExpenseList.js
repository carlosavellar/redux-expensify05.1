import React from 'react'
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expense";

const ExpenseList = (props) => (
    <div>
        List
        {props.expenses.map((expense) => <ExpenseListItem
            key={expense.id}
            {...expense}
        />)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);