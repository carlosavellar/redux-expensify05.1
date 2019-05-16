import React from 'react';
import { connect } from "react-redux";
import { SingleDatePicker } from 'react-dates';
import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: 0,
            note: "",
            createdAt: moment([2010, 6, 10]),
            calendarFocused: false,
            error: ""
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onDateChange = (createdAt) => {
        console.log(createdAt);
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    };

    onFocusChange = ({ focused }) => {
        console.log(focused);
        this.setState(() => ({ calendarFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please, provide a amount and description" }));
        } else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.description,
                createdAt: this.state.createdAt.valueOf()
            });
        }

    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.onSubmit}
                >
                    <input
                        value={this.props.expenses.description}
                        autoFocus
                        type="text"
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        value={this.props.expenses.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                        value={this.props.expenses.note}
                        type="text"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={(createdAt) => {
                            this.setState(() => ({ createdAt }));
                        }}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        isOutsideRange={() => false}
                        numberOfMonths={1}
                        keepOpenOnDateSelect={true}
                    />
                    <button type="submit">Adicionar-</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    expenses: state.expenses
});

export default connect(mapStateToProps)(ExpenseForm);
