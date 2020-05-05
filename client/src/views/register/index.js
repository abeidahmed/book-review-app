import React from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Form from "./components/form";
import Header from "./components/header";

export default function Register() {
  const client = useApolloClient();
  const history = useHistory();
  const [signup, { loading }] = useMutation(REGISTER_USER, {
    onCompleted(signup) {
      localStorage.setItem("token", signup.createUser.token);
      client.writeData({ data: { isLoggedIn: true } });
      history.push("/");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Header />
        <div className="mt-8 p-10 bg-white rounded-md shadow">
          <Form signup={signup} loading={loading} />
        </div>
      </div>
    </div>
  );
}

const REGISTER_USER = gql`
  mutation signup($email: String!, $password: String!) {
    createUser(userInput: { email: $email, password: $password }) {
      token
    }
  }
`;
