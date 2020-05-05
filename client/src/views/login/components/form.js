import React, { useState } from "react";
import { fieldValidation } from "utils/field-validation";
import Icon from "components/icon";

const Form = ({ loading, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login({
        variables: {
          email: email,
          password: password
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="rounded-md shadow-sm">
        <div>
          <input
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Email address"
          />
        </div>
        <div className="-mt-px">
          <input
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        {fieldValidation(error, "Invalid") && (
          <p className="text-sm font-medium text-red-700">{fieldValidation(error, "Invalid")}</p>
        )}
        <div className="ml-auto text-sm leading-5">
          <a
            href="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <Icon
              icon="lock"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
            />
          </span>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </div>
    </form>
  );
};

export default Form;
