import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [ischeckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHanlder = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHanlder = (id) => {
    // console.log(id);
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const submitHandler = (userdata) => {
    setIsSubmitting(true);
    fetch("https://react-learn-a0909-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({ user: userdata, order: cartCtx.items }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onConfirm}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItemHanlder.bind(null, item)}
          onRemove={removeItemHanlder.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {ischeckout && <Checkout onConfirm={submitHandler} />}
      {!ischeckout && modalAction}
    </React.Fragment>
  );

  const isSubmittingModelcontent = <p>Ordering...</p>;
  const didSubmittingModelcontent = (
    <React.Fragment>
      <p>Order Placed...</p>{" "}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onConfirm}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onConfirm}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && !didSubmit && isSubmittingModelcontent}
      {!isSubmitting && didSubmit && didSubmittingModelcontent}
    </Modal>
  );
};

export default Cart;
