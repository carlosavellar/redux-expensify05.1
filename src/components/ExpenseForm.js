import React from 'react'
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
            createdAt: moment(),
            calendarFocused: false
        }
    };

    ondDatesChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => (createdAt));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => (calendarFocused: focused));
    }

    render() {
        return (
            <div>
                <form>
                    <input

                        value={this.state.description}
                        type="text"
                        placeholder="description"
                        onChange={() => {
                            this.onChangeDescription
                        }
                        }
                        autoFocus
                    />
                    <input

                        value={this.state.amount}
                        type="number"
                        placeholder="amount"
                        onChange={() => {
                            this.onChangeAmount
                        }
                        }
                        autoFocus
                    />
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