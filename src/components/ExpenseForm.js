import React from "react";
import moment from "moment";
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            note: props.expense ? props.expense.note : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.amount || !this.state.amount) {
            this.setState(() => ({ error: "Fill description and amount" }));
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    }

    render() {
        const params = this.props;
        return (
            <div>
                {this.state.error && <strong>{this.state.error}</strong>}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input
                        value={this.state.description}
                        autoFocus
                        placeholder="Description"
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        value={this.state.amount}
                        placeholder="amount"
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="add note"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}