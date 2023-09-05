import { useRef, useState } from "react";
import Header from "./Header";
import IMG_LOGO from "./image/bg_img.jpg";
import { checkValidateData } from "./utils/validate";
import { auth } from "./utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignupForm = () => {
    setIsSignUpForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate Form Data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) {
      return;
    }

    // create a new user i.e signin / signup
    if (!isSignInForm) {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsSignUpForm(errorCode + " " + errorMessage);
        });
    } else {
      // signIn

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    console.log("Hi", email.current.value, password.current.value, message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={IMG_LOGO} alt="bg_logo" />
      </div>
      {/* when click on button inside form it calls onSubmit method */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute my-36 mx-auto right-0 left-0 p-[2.5rem] bg-black text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold p-4 text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            className="p-2 my-2 w-full bg-gray-600 rounded-sm"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-2 w-full bg-gray-600 rounded-sm"
          type="email"
          placeholder="Email Address"
        />

        <input
          autoCapitalize="true"
          ref={password}
          className="p-2 my-2 mb-8 w-full bg-gray-600 rounded-sm"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500">{errorMessage}</p>

        <button
          type="submit"
          onClick={handleButtonClick}
          className="p-2 bg-red-700 w-full rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
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
              {isSignInForm
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
