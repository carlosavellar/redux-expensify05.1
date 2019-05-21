import React from 'react'
import { connect } from "react-redux";
import selectedExpenses from "../selectors/expenses";
import { sortByAmount, sortByDate, setTextFilter } from "../actions/filters";
import { DateRangePicker } from 'react-dates';
class ExpenseListFilter extends React.Component {
    render() {

        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            if (e.target.value === "date") {
                                this.props.dispatch(sortByDate());

                            } else if (e.target.value === "amount") {
                                this.props.dispatch(sortByAmount());

                            }
                        }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    {/* <DateRangePicker 
                        startDate: 
                    
                    /> */}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseListFilter);

