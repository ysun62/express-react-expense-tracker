import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  let balance = 0;

  transactions.map((transaction) => (balance += transaction.amount));

  return (
    <React.Fragment>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(balance.toFixed(2))}</h1>
    </React.Fragment>
  );
};

export default Balance;
