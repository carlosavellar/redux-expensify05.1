import React, { memo } from 'react'
import { connect } from 'react-redux'
import selectedExpenses from "../store/configureStore";
import { sortByAmount, sortByDate, setTextFilter, setEndDate, setStartDate } from "../actions/filter";
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setEndDate(endDate));
        this.props.dispatch(setStartDate(startDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        const props = this.props;
        return (
            <div>
                <form>
                    <input
                        value={props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter({ text: e.target.value }))
                        }}
                    />
                    <select onChange={(e) => {
                        e.target.value === "date" ? this.props.dispatch(sortByDate()) : "";
                        e.target.value === "amount" ? this.props.dispatch(sortByAmount()) : "";
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
    filters: selectedExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseListFilter);

