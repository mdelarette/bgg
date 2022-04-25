import { createRoot } from 'react-dom/client';

import { Provider } from "react-redux";


import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';


import { PersistGate } from "redux-persist/integration/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import theme from "./theme";
import App from "./App";
import { store, persistor } from "./store/configure";
import * as serviceWorker from "./serviceWorker";


const queryClient = new QueryClient();


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
<QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
