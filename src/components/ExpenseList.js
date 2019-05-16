import { connect } from "react-redux";
import React from "react";
import selectedExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => (
    <div>
        <h2>Expense List</h2>
        {props.expenses.map((expense) => {
            return (<ExpenseListItem
                key={expense.id}
                {...expense}
            />)
        })}
    </div>
);

const mapStateToPtops = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
};

export default connect(mapStateToPtops)(ExpenseList);