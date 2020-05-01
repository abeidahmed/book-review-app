import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import "assets/stylesheet/font.css";
import "assets/stylesheet/main.css";
import App from "App";
import { resolvers, typeDefs } from "graphql/resolvers";

const cache = new InMemoryCache();

const token = localStorage.getItem("token");
let authorization;
if (token) {
  authorization = `Bearer ${token}`;
} else {
  authorization = "";
}

const link = new HttpLink({
  headers: {
    authorization
  },
  uri: "/graphql"
});

cache.writeData({
  data: {
    isLoggedIn: !!token
  }
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
