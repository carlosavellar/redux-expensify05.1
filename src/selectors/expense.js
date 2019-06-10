export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        console.log(expense.description);
        const startDateMath = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMath = typeof endDate !== "number" || expense.createdAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMath && endDateMath && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? -1 : 1;
        } else if (sortBy === "amount") {
            return a.amount < b.amount ? -1 : 1;
        }
    });
};