import { useState } from 'react';

function useCounter(initValue) {
  const [ counter, setCounter] = useState(initValue || 0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);


  return {
    counter,
    handleDecrement,
    handleIncrement,
    handleReset,
  }
}

export default useCounter;