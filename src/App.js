import { useState } from "react";
import "./index.css";
import Salary from "./components/Salary";
import ExpenseMaker from "./components/ExpenseMaker";
import Receipt from "./components/Receipt";
export default function App() {
  const [expenseArr, setExpenseArr] = useState([]);
  const [salary, setSalary] = useState("");
  const [allPrice, setAllPrice] = useState(0);
  const [expenseLimit, setExpenseLimit] = useState("");

  function addExpenseToArray(expenseItem) {
    setExpenseArr((existingArr) => [...existingArr, expenseItem]);
  }
  return (
    <div className="App">
      <h1 className="app-header">Expense Tracker</h1>
      <Salary
        salary={salary}
        expenseLimit={expenseLimit}
        onSetExpenseLimit={setExpenseLimit}
        onSetSalary={setSalary}
      />
      <ExpenseMaker
        onSetAllPrice={setAllPrice}
        onAddToExpenseArr={addExpenseToArray}
      />
      <Receipt
        expenseLimit={expenseLimit}
        allPrice={allPrice}
        salary={salary}
        expenseArr={expenseArr}
      />
    </div>
  );
}
