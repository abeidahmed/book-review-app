import React from "react";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import Form from "./components/form";
import Header from "./components/header";

export default function Login() {
  const client = useApolloClient();
  const history = useHistory();
  const [login] = useMutation(LOGIN_USER, {
    onCompleted(login) {
      localStorage.setItem("token", login.loginUser.token);
      client.writeData({ data: { isLoggedIn: true } });
      history.push("/");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Header />
        <Form login={login} />
      </div>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation logIn($email: String!, $password: String!) {
    loginUser(userInput: { email: $email, password: $password }) {
      token
    }
  }
`;
