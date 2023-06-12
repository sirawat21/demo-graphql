import React from "react";
import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import App from "./App.tsx";
import "./index.css";

// Initialising client instant
const host = "localhost:3300";
const client = new ApolloClient({
  uri: host,
  cache: new InMemoryCache(),
});

// Making client request
client.query({
    query: gql`
      query hello {
      }
    `,
  }).then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
