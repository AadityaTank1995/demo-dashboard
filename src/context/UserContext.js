import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  loaded: false, 
  user: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { loaded: true, user: action.payload };
    default:
      return state;
  }
};

export function UserProvider(props) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}