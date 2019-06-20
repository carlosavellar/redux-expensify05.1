import React from 'react';
import { connect } from "react-redux";
import selectedExpenses from "../selectors/expense";
import ExpenseListItem from "./ExpenseListItem";
import totalExpenses from "../selectors/expensesTotal";
const ExpenseList = (props) => (
    <div>

        <div>
            {props.expenses.map((expense) => <ExpenseListItem
                key={expense.id}
                {...expense}
            />)}
        </div>
        <div>
            <b>Total of:</b> {totalExpenses(props.expenses)}
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);