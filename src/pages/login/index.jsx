import React from "react";
import Signin from "./signin";
import Signup from "./signup";
import { useState } from "react";
//UserContext
import { useContext } from "react";
import { UserContext } from "../../context/user";
const AuthPage = ({ handleClose, setIsLogged }) => {
  const { isSignIn } = useContext(UserContext);
  //---- ver 1 -----
  //   if (isSignIn == true) {
  //     return <Signin />;
  //   } else {
  //     return <Signup />;
  //   }

  //   ---- ver 2 -----
  return (
    <>
      {isSignIn ? (
        <Signin
          handleClose={handleClose}
          // setIsLogged={setIsLogged}
          // setIsSignIn={setIsSignIn}
        />
      ) : (
        <Signup
          handleClose={handleClose}
          // setIsLogged={setIsLogged}
          // setIsSignIn={setIsSignIn}
        />
      )}
    </>
  );

  //---- ver 3 -----
  //   return (
  //     <>
  //       {isSignIn && <Signin />}
  //       {!isSignIn && <Signup />}
  //     </>
  //   );
};

export default AuthPage;
