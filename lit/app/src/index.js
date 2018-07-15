import React from "react";
import { CuriProvider } from "@curi/react-native";
import { ApolloProvider } from "react-apollo";

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
          <Body
            response={response}
            router={router}
          />
        );
      }}
    </CuriProvider>
  </ApolloProvider>
);
