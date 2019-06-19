import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filter.js";
import selectedExpenses from "../selectors/expense";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        }
    }
    onSearxhTextChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value));
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {

        return (
            <div>
                <form>

                    <input
                        placeholer="search expense"
                        onChange={this.onSearxhTextChange}
                    />
                    <select
                        onChange={(e) => {
                            if (e.target.value === "date") {
                                this.props.dispatch(sortByDate());
                            } else if (e.target.value === "amount") {
                                this.props.dispatch(sortByAmount());
                            }
                        }}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilter);