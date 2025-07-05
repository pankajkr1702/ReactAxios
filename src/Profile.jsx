import React, { useState, useCallback, useMemo } from 'react';

// ✅ Memoized child
const Child = React.memo(({ onClick, label }) => {
  console.log('Child rendered:', label);
  return <button onClick={onClick}>{label}</button>;
});

function Profile() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

    // const increment = () =>
    // {
    //     setCount(c => c + 1)
    // }

  // ✅ useCallback: keeps function reference stable
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);

  // ✅ useMemo: expensive calculation only on `count` change
  const expensiveCalc = useMemo(() => {
    console.log('Expensive calculation running...');
    return count * 1000;
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Count: {count}</h2>
      <h3>Heavy Value: {expensiveCalc}</h3>

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

export default Profile;