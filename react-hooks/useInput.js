import ReactDOM, { createRoot } from "react-dom/client";
import React, { StrictMode, useState } from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => {
    return value.length <= 10;
  };
  const excludeAt = (value) => !value.includes("@");
  const name = useInput("Mr.", excludeAt);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
