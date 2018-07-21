import React from "react";
import { CuriProvider } from "@curi/react-native";
import { ApolloProvider } from "react-apollo";
import Header from "./components/Header";

import router from "./router";
import apolloClient from "./apollo";

import Loading from "./components/Loading";

export default () => (
  <ApolloProvider client={apolloClient}>
    <CuriProvider router={router}>
      {({ response, router }) => {
        if (!response) {
          return <Loading />;
        }
        const { body:Body } = response;
        return (
          <React.Fragment>
            <Header />
            <Body
              response={response}
              router={router}
            />
          </React.Fragment>
        );
      }}
    </CuriProvider>
  </ApolloProvider>
);
