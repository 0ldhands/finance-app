import { useState } from "react"
import React from 'react'

const Expensehistory = ({val}) => {
    const [total, setTotal] = useState();
    
      const add = () => {
        setTotal(()=>val.reduce((tot,crr)=>tot+=Number(crr.amount)));
      };
    
      setInterval(add, 1000);
  return (
    <div className="t-container">
    <table className="table-container">
      <thead>
        <tr className="th-c">
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Expense History</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Name</th>
          <th scope="col">Expenses</th>
          <th scope="col">Payment</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        {val.map((pre, i) => {
          return (
            <tr key={i}>
              <td>{i}.</td>
              <td>{pre.name}</td>
              <td>{pre.expense}</td>
              <td>{pre.payment}</td>
              <td>{pre.amount} ₹</td>
            </tr>
          );
        })}
        <tr>
          <td>Total</td>
          <td>XXXX</td>
          <td>XXXXXXXXXXXX</td>
          <td>XXXXXXX</td>
          <td>{total} ₹</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Expensehistory