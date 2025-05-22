//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
//import { Component } from 'react';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: 'INCREMENT' });
  }

  function handleIncrease() {
    dispatch({ type: 'INCREASE', amount: 5 });
  }

  function handleDecrement() {
    dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   handleIncrement = () => {
//     this.props.increment();
//   }

//   handleDecrement = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {}

//   render() {
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//         <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
