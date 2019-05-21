import React from 'react';
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";
const ExpenseList = ({ expenses }) => (
    <div>
        <h3>Expense List</h3>
        {expenses.map((expense) => (<ExpenseListItem
            key={expense.id}
            {...expense}
        />))}
        <ExpenseListItem />
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);