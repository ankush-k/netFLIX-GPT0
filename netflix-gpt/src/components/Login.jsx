import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUp = (event) => {
    setIsSignIn(!isSignIn);
    event.preventDefault();
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
      <form className="absolute w-3/12 my-36 mx-auto right-0 left-0 bg-black text-white p-6 rounded-lg bg-opacity-80">
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
          className="bg-gray-700 py-4 px-2 my-2 rounded-md w-full"
          type="text"
          placeholder="Email ID"
        />
        <input
          className="bg-gray-700 py-4 px-2 my-2 rounded-md w-full"
          type="password"
          placeholder="Password"
        />
        <button className="py-3 my-4 bg-red-700 rounded-md w-full">
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
