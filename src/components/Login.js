import { useState } from "react";
import Header from "./Header";
import IMG_LOGO from "./image/bg_img.jpg";

const Login = () => {
  const [isSignupForm, setIsSignupForm] = useState(true);

  const toggleSignupForm = () => {
    setIsSignupForm(!isSignupForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={IMG_LOGO} alt="bg_logo" />
      </div>
      <form className="w-4/12 absolute my-36 mx-auto right-0 left-0 p-[2.5rem] bg-black text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold p-4 text-xl">
          {isSignupForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignupForm && (
          <input
            className="p-2 my-2 w-full bg-gray-600 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2 my-2 w-full bg-gray-600 rounded-sm"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="p-2 my-2 mb-8 w-full bg-gray-600 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 bg-red-700 w-full rounded-sm">
          {isSignupForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex justify-between mt-2">
          <div>
            <input type="checkbox" name="remember" />
            <label htmlFor="remember" className="ml-2  text-sm  ">
              Remember me
            </label>
          </div>
          <div>
            <span className="mr-2 text-sm">Need help?</span>
          </div>
        </div>
        <div className="mt-10">
          <div onClick={toggleSignupForm} className="cursor-pointer">
            <p className="mr-2 text-sm text-gray-400">
              {isSignupForm
                ? "New to Meta-Play? Sign up now"
                : "Already registered? Sign In Now"}
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            This page is powered by Google captcha to ensure you are not a bot{" "}
            <span className="text-blue-900">Learn more</span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
