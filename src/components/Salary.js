export default function Salary({
  salary,
  onSetSalary,
  expenseLimit,
  onSetExpenseLimit,
}) {
  return (
    <form className="expense-maker salary-box">
      <label className="expense-input-box">
        Salary :
        <input
          type="number"
          value={salary}
          onChange={(e) => onSetSalary(Number(e.target.value))}
          placeholder="Enter Salary"
        />
      </label>
      <label className="expense-input-box">
        Monthly Expense Limit:
        <input
          type="number"
          value={expenseLimit}
          onChange={(e) => onSetExpenseLimit(Number(e.target.value))}
          placeholder="Enter Monthly Expense Limit"
        />
      </label>
    </form>
  );
}
