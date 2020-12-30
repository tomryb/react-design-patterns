import React from 'react';
import counterHoc from './counter.hoc';
import useCounter from './useCounter';

function Counter({ counter, handleIncrement, handleDecrement, handleReset }) {

  // dla hooka
  // const { counter, handleDecrement, handleIncrement, handleReset, } = useCounter()

  return (
    <div>
      Counter: {counter}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>

    </div>
  )
}
// dla hooka usunąć counterHoc
export default counterHoc(Counter);