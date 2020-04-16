import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const TransactionList = () => {
  const { transactions, deleteTransaction, getTransaction } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getTransaction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => {
          let sign = transaction.amount < 0 ? "-" : "+";
          return (
            <li
              key={transaction._id}
              className={transaction.amount < 0 ? "minus" : "plus"}
            >
              {transaction.text}
              <span>
                {sign}${numberWithCommas(Math.abs(transaction.amount))}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction._id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default TransactionList;
