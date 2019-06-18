import React from 'react';
import { connect } from "react-redux";
import selectedExpenses from "../selectors/expense";
import ExpenseListItem from "./ExpenseListItem";
class ExpenseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { expenses } = this.props;

        return (
            <div>
                {expenses.map((exp) => <ExpenseListItem
                    key={exp.id}
                    {...exp}
                />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenses: selectedExpenses(state.expenses, state.expenses)
});

export default connect(mapStateToProps)(ExpenseList);