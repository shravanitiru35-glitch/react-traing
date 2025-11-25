// src/MyContext.jsx
import React, { createContext, useState } from "react";

export const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [value, setValue] = useState("Hello World");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}