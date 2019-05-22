import React from 'react';

import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import expense from '../reducers/expense';
const trace = (<div>  - </div>);
const ExportListItem = ({ dispatch, id, description, amount, note, createdAt }) => (
    <div className="listExpense">
        <Link to={`./edit/${id}`}><div><strong>{description} |</strong></div></Link>
        <div>{amount}</div>
        {trace}
        <div>{note}</div>
        {trace}
        <div>{id}</div>
        <div>{createdAt}</div>

    </div >
);

export default connect()(ExportListItem);