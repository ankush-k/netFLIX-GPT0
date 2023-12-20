import { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef();
  const password = useRef();

  const handleSignUp = (event) => {
    setIsSignIn(!isSignIn);
    event.preventDefault();
  };

  const handleSubmit = () => {
    const message = validate(email.current.value, password.current.value);

    setErrMessage(message);
    if (message) {
      return;
    }

    if (isSignIn) {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-poster"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white p-6 rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold p-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="bg-gray-700 py-4 px-2 my-2 rounded-md w-full"
            type="text"
            placeholder="Name"
          />
        )}

        <input
          ref={email}
          className="bg-gray-700 py-4 px-2 my-2 rounded-md w-full"
          type="text"
          placeholder="Email ID"
        />
        <input
          ref={password}
          className="bg-gray-700 py-4 px-2 my-2 rounded-md w-full"
          type="password"
          placeholder="Password"
        />
        <p className="py-2 text-red-700 font-bold text-lg">{errMessage}</p>
        <button
          className="py-3 my-4 bg-red-700 rounded-md w-full"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix?" : "Already a member?"}
          <button className="px-2 hover:font-bold" onClick={handleSignUp}>
            {isSignIn ? "Sign Up now!" : "Sign In now!"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
