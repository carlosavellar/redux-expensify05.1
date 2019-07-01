import { connect } from 'react-redux'

const ExpenseListItem = ({ description, amount, note, creratedAt, id }) => (
    <div>
        <h2>{description}</h2>
        <span>{amount}</span>
        <span>{note}</span>
        <span>{createdAt}</span>
    </div>
);

export connect()(ExpenseListItem);