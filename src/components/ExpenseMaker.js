import { useState } from "react";
export default function ExpenseMaker({ onAddToExpenseArr, onSetAllPrice }) {
  const [expenseName, setExpenseName] = useState("");
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  // derived state : aesi state jo dusri state pe  depend krti hai .
  const totalPrice = Number(expense * quantity);
  const handleForm = (e) => {
    e.preventDefault();
    const expense = {
      name: expenseName,
      quantity: quantity,
      price: Number(totalPrice),
      id: Date.now(),
    };

    onAddToExpenseArr(expense);
    onSetAllPrice((existingPrice) => existingPrice + expense.price);
    setExpense("");
    setExpenseName("");
    setCategory("");
    setQuantity("");
  };
  return (
    <form onSubmit={handleForm}>
      <div className="expense-maker">
        <div className="expense-input-box">
          <input
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            type="text"
            placeholder="Product Name"
          />
          <input
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            type="number"
            placeholder="Enter Expense"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Utility Bill</option>
            <option>Internet Bill</option>
            <option>Grocery</option>
          </select>
        </div>
        <div className="expense-input-box">
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="Enter Quantity"
          />
          <input
            value={totalPrice}
            type="number"
            placeholder="Total Price"
            readOnly
          />
        </div>
        <button type="submit">Calculate Expense</button>
      </div>
    </form>
  );
}
