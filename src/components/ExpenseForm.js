// Teste Undo COmmit
import React from 'react'
import { SingleDatePicker } from 'react-dates';
import moment from "moment";

import 'react-dates/lib/css/_datepicker.css';
import { parse } from '@babel/parser';
console.log(moment());
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
    };

    ondDatesChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onChangeDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))

    }
    onNotesChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Errro has happened" }))
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
        console.log(this.state)
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input

                        value={this.state.description}
                        type="text"
                        placeholder="description"
                        onChange={this.onChangeDescription}
                        autoFocus
                    />
                    <input
                        value={this.state.amount}
                        type="number"
                        placeholder="amount"
                        onChange={this.onAmountChange}
                        autoFocus
                    />
                    <textarea
                        value={this.state.note}
                        placeholder="note"
                        onChange={this.onNotesChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.ondDatesChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>
                        add
                    </button>
                </form>
            </div>
        );
    }
}


export default ExpenseForm;