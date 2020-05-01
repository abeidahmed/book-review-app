import React, { useState } from "react";

const Form = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signup({
      variables: {
        email: email,
        password: password
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="signup_email" className="text-sm text-gray-700 font-medium">
          Email address
        </label>
        <input
          id="signup_email"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="signup_password" className="text-sm text-gray-700 font-medium">
          Password
        </label>
        <input
          id="signup_password"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="block w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-7 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Form;
