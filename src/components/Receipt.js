import Expense from "./Expense";
export default function Receipt({
  expenseArr,
  salary,
  allPrice,
  expenseLimit,
}) {
  return (
    <div className="receipt">
      <h1 style={{ marginBottom: ".5em" }}>Monthly Receipt: </h1>
      <div className="expense-detail-container">
        <p>Product</p>
        <p>Quantity</p>
        <p>Price</p>
      </div>
      {expenseArr.map((expense) => {
        return <Expense key={expense.id} expense={expense} />;
      })}
      <div className="expense-detail-container">
        <div className={`${salary >= allPrice ? "salaryGreen" : "salaryRed"}`}>
          <strong>Salary: </strong>
          {salary - allPrice}
          {allPrice > expenseLimit && (
            <p className="salaryRed">You have exceeded the limit</p>
          )}
        </div>
        <p>--</p>
        <p>Total Price : {allPrice} </p>
      </div>
    </div>
  );
}
