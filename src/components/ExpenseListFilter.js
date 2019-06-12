import React from 'react'
import { connect } from 'react-redux';
import selectedExpenses from "../selectors/expense";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filter";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarFocused: null
        }
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
                        placeholder="search"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <select
                        onChange={(e) => {
                            if (e.target.value === "date") {
                                console.log("date 9 entre 10");
                                this.props.dispatch(sortByDate());
                            } else if (e.target.value === "amount") {
                                this.props.dispatch(sortByAmount());
                            }
                        }}>
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