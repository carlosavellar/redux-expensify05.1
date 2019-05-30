import React from 'react'
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = (props) => (

    <div>
        Expense list ---
        <ul>
            {props.expenses.map((expense) => (<ExpenseListItem
                key={expense.id}
                {...expense}
            />)
            )}
        </ul>
    </div>
);

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseList);