import React from 'react';
import moment from "moment";
import { connect } from "react-redux";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        }
    }
    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            this.setState(() => ({ amount }))
        this.setState(() => ({ error: "" }));

    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = () => {
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please provide description and amount" }));
        } else {

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.onSubmit}>
                    <input
                        value={this.state.description}
                        type="text"
                        placeholder="description"
                        onChange={this.onChangeDescription}

                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        type="text"
                        placeholder="Note"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>add expense</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseForm);
