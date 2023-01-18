import React from "react";
import Signin from "./signin";
import Signup from "./signup";
import { useState } from "react";
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
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
        <Signin setIsSignIn={setIsSignIn} />
      ) : (
        <Signup setIsSignIn={setIsSignIn} />
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
