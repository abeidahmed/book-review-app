import React, { useState } from "react";
import { InputField } from "components/field";

const Form = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signup({
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
    <form onSubmit={handleSubmit}>
      <div>
        <InputField
          id="signup_email"
          label="Email"
          error={error}
          errorType="Email"
          value={email}
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-5">
        <InputField
          id="signup_password"
          error={error}
          errorType="Password"
          label="Password"
          value={password}
          type="password"
          onChange={e => setPassword(e.target.value)}
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
