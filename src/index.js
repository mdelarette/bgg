import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import { frFR } from '@mui/material/locale';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';


// import { ThemeProvider, createTheme, makeStyles  } from "@mui/material/styles";

// import { frFR } from "@mui/material/locale";

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

// https://mui.com/material-ui/customization/theming/
// https://bareynol.github.io/mui-theme-creator/
const theme = createTheme({
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
  components: {
    // Name of the component
    MuiAppBar: {
        styleOverrides: {
          root: {
            // backgroundColor: "#4D0000", // ça fonctionne !
          }
        }
    }
  },


}, frFR);


// https://www.pantone.com/articles/color-of-the-year/color-of-the-year-2020

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


// ReactDOM.render(
//   <QueryClientProvider client={queryClient}>
//     <StyledEngineProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <Provider store={store}>
//           <PersistGate loading={null} persistor={persistor}>
//             <App />
//           </PersistGate>
//         </Provider>
//       </ThemeProvider>
//     </StyledEngineProvider>
//     <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
