// As the first React problem, you are asked to create the famous Counter app.

// counter starts from 0.
// click the '+' button to increment.
// click the '-' button to decrement.

import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setCount(count - 1)}
        data-testid="decrement-button"
      >
        -
      </button>
      <button
        onClick={() => setCount(count + 1)}
        data-testid="increment-button"
      >
        +
      </button>
      <p>clicked: {count}</p>
    </div>
  );
}
