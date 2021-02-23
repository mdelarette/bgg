import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { frFR } from "@material-ui/core/locale";

import { PersistGate } from "redux-persist/integration/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import App from "./App";
import { store, persistor } from "./store/configure";
import * as serviceWorker from "./serviceWorker";

// https://hookagency.com/website-color-schemes
// 6. Greenery + Gradients Website Color Scheme 2021 by Anna Senkova
// Dark Green: #164A41

// Medium Green: #4D774E

// Light Green: #9DC88D

// Natural Yellow: #F1B24A

// White: #FFFFFF

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#4D774E",
        dark: "#164A41",
        light: "#9DC88D",
      },
      secondary: {
        main: "#F1B24A",
      },
    },
  },
  frFR
);

// https://www.pantone.com/articles/color-of-the-year/color-of-the-year-2020

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
