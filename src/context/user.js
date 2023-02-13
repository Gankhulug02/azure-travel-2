import React, { Children } from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const User = ({ children }) => {
  const newLogged = localStorage.getItem("isLogged");
  const [isLogged, setIsLogged] = useState(newLogged);
  const userName = localStorage.getItem("user");
  const userId = localStorage.getItem("userId");
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <UserContext.Provider
      value={{
        newLogged,
        setIsLogged,
        isLogged,
        userName,
        userId,
        setIsSignIn,
        isSignIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default User;

//test
