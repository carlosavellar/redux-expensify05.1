import React from 'react'
import { SingleDatePicker } from 'react-dates';
import moment from "moment";

import 'react-dates/lib/css/_datepicker.css';
import { parse } from '@babel/parser';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: 0,
            note: "",
            createdAt: moment(),
            calendarFocused: false
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
        this.props.onSubmit = () => ({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) / 100,
            note: this.state.note,
            createdAt: moment(this.state.createdAt).valueOf
        });
    }

    render() {
        return (
            <div>
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