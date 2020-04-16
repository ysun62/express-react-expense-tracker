import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  let expense = 0,
    income = 0;

  transactions.map((transaction) =>
    transaction.amount < 0
      ? (expense += transaction.amount)
      : (income += transaction.amount)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${numberWithCommas(income.toFixed(2))}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          ${numberWithCommas(Math.abs(expense).toFixed(2))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
