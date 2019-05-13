import React from 'react';

const EditExpensePage = ({ match }) => {
  console.log(match);
  return (
    <div>
      Editing the expense with id of {match.params.id}
    </div>
  );
};

export default EditExpensePage;
