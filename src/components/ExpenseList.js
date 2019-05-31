import React from 'react'
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expense";
const ExpenseList = (props) => (

    <div>
        Expense list ---
        <ul>
            {props.expenses.map((expense) => {
                return <ExpenseListItem
                    key={expense.id}
                    {...expense}
                />
            }
            )}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);