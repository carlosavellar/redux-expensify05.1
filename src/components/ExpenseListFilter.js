import React from 'react'
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
class ExpenseListFilter extends React.Component {

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
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilter);