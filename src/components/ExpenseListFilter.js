import React from 'react'
import { connect } from "react-redux";

import { dispatch, sortByAmount, sortByDate, setTextFilter } from "../actions/filters";

class ExpenseListFilter extends React.Component {
    render() {
        const { props, } = this;
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.props.filters.text}
                        onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value));
                        }}
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters

});

export default connect(mapStateToProps)(ExpenseListFilter);

