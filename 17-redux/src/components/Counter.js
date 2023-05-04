import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showModal = useSelector((state) => state.counter.showModal);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementCounterby10Handler = () => {
    dispatch(counterActions.increase(10));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showModal && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementCounterHandler}>DECREMENT</button>
        <button onClick={incrementCounterby10Handler}>INCREMENT by 10</button>
        <button onClick={incrementCounterHandler}>INCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
