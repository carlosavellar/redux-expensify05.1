import React from 'react'

const ExpenseListItem = ({ description, amount, id, note, createdAt }) => (
    <li>

        <span><strong>{description}: </strong></span>
        <span>R$ {amount}</span><span>  |  </span>
        <span>{createdAt}</span><span>  |  </span>
        <span>{id}</span><span>  |  </span>
        <button>
            del
        </button>
    </li>
);

export default ExpenseListItem;