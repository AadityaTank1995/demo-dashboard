import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  isDark: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { isDark: !state.isDark };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  )
}