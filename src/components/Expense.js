export default function Expense({ expense }) {
  return (
    <div className="expense-detail-container items">
      <p className="items">{expense.name}</p>
      <p className="items">{expense.quantity}</p>
      <p className="items">{expense.price}</p>
    </div>
  );
}
