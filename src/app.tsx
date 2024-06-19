import React from "react";
import { useState } from "react";
import useStore, { stores, context } from "./tools";
import Todos from "./todos";
import './app.css';

export default function App() {
  const [count, setCount] = useState(0);
  const { todoListStore } = useStore();
  return (
    <>
      <Todos />
    </>
  );
}
