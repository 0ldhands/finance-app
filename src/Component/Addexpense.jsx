import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Addexpense = ({data}) => {
  const navi = useNavigate();

  const [users, setUsers] = useState([]);
  const [userinfo, setUserinfo] = useState({
    name: "",
    expense: "",
    payment: "",
    amount: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setUserinfo((crr) => {
      return { ...crr, [name]: value };
    });
  };

  const addDetails = () => {
    setUsers((crr) => [...crr, userinfo]);
    setUserinfo(() => {
      return {
        name: "",
        expense: "",
        payment: "",
        amount: "",
      };
    });
    data({
      name: userinfo.name,
      expense: userinfo.expense,
      amount: userinfo.amount,
      payment: userinfo.payment,
    });
    navi(-1)
  };

  return (
    <div className="add2-container">
      <form>
        <h2>Add Expense</h2>
        <label htmlFor="name">Name * </label>
        <input
          type="text"
          name="name"
          value={userinfo.name}
          id="name"
          onChange={(e) => handleClick(e)}
          required
        />
        <label htmlFor="dropdown"></label>
        <select
          id="dropdown"
          value={userinfo.expense}
          onChange={(e) => handleClick(e)}
          name="expense"
        >
          <option value="">what type of expense ?</option>
          <option value="Grocery">Grocery</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>

        <label> Select Payment * </label>
        <label htmlFor="payment1">
          <input
            type="radio"
            name="payment"
            value="Cash"
            onChange={(e) => handleClick(e)}
            id="payment1"
          />
          Cash
        </label>

        <label htmlFor="payment2">
          <input
            type="radio"
            name="payment"
            value="Upi"
            onChange={(e) => handleClick(e)}
            id="payment2"
          />
          Upi
        </label>

        <label htmlFor="payment3">
          <input
            type="radio"
            name="payment"
            value="Card"
            onChange={(e) => handleClick(e)}
            id="payment3"
          />
          Card
        </label>

        <label htmlFor="amount">Amount * </label>
        <input
          type="number"
          name="amount"
          value={userinfo.amount}
          id="amount"
          onChange={(e) => handleClick(e)}
          required
        />

        <input type="submit" onClick={addDetails} />
      </form>
      <div>
        {users.map((pre, i) => {
          return (
            <ul key={i}>
              <li>{pre.name}</li>
              <li>{pre.expense}</li>
              <li>{pre.payment}</li>
              <li>{pre.amount}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Addexpense;
