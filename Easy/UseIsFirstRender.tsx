// Create a hook to tell if it is the first render.

// function App() {
//   const isFirstRender = useIsFirstRender()
//     only true for the first render
//   ...
// }

import React, { useRef } from "React";

export function useIsFirstRender(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
}

export function App() {
  const isFirstRender = useIsFirstRender();

  return <div>{isFirstRender ? "First render" : "Not first render"}</div>;
}
