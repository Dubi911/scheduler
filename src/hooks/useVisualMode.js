import React, { useState, useEffect } from "react";

export const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  // history is a array
  const [history, setHistory] = useState([initial]);
  const transition = (mode, replace = false) => {
    replace ? 
      history[history.length -1] = mode: 
      history.push(mode);
    setMode(mode);
  }
  const back = () => {
    if(history.length - 1 > 0){
      history.pop();
      setMode(history[history.length -1]);
    }
  }
  console.log(history)
  return {mode, transition, back}
} 