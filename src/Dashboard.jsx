import React, { useState } from 'react';


const Child = ({ onClick, label }) => {
  console.log('Child rendered:', label);
  return <button onClick={onClick}>{label}</button>;
};

function Dashboard() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  console.log('Parent rendered');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

 
  const expensiveCalc = (() => {
    console.log('Expensive calculation running...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count;
    }
    return result;
  })();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>
      <h3>Heavy Value: {expensiveCalc}</h3>

      {/* ❌ Child re-renders every time because onClick is a new function reference */}
      <Child onClick={increment} label="+" />
      <Child onClick={decrement} label="-" />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
}

export default Dashboard;