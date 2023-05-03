import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../../UI/Card";
// import { useState } from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const ClickHandler = () => {
  //   setTitle("updated!");
  //   console.log(title);
  // };
  return (
    <li>
      {" "}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={ClickHandler}>Update</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
