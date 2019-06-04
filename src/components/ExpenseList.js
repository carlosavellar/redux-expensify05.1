// Teste Undo COmmit
import React from 'react'
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expense";
import selectedTotalExpense from "../selectors/expensesTotal";
class ExpenseList extends React.Component {

    render() {
        const {
            props,
        } = this;
        let total = 0;
        console.log(this);

        return (
            <div>
                Expense list -
                <ul>
                    {props.expenses.map((expense) => {
                        return <ExpenseListItem

                            key={expense.id}
                            {...expense}
                        />
                    }
                    )}
                </ul>

                <div>
                    {
                        props.expenses ? <div>Total expenses  {selectedTotalExpense(props.expenses)}</div> : ""
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);