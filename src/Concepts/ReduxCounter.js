import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const ReduxCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>ReduxCount: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: '10px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};

export default ReduxCounter;
