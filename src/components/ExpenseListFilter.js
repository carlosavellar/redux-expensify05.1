import React from 'react'
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from "../actions/filters";
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
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
                        type="text"
                        placeholder="Search expense"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                    <select
                        value={this.props.filters.sortBy}
                        onChange={(e) => {
                            e.target.value === "date" ? this.props.dispatch(sortByDate()) : false;
                            e.target.value === "amount" ? this.props.dispatch(sortByAmount()) : false;
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
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilter);