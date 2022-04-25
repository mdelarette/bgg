
import { frFR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';


// https://hookagency.com/website-color-schemes
// 6. Greenery + Gradients Website Color Scheme 2021 by Anna Senkova
// Dark Green: #164A41

// Medium Green: #4D774E

// Light Green: #9DC88D

// Natural Yellow: #F1B24A

// White: #FFFFFF

// https://mui.com/material-ui/customization/theming/
// https://bareynol.github.io/mui-theme-creator/

// https://www.pantone.com/articles/color-of-the-year/color-of-the-year-2020

// https://mui.com/material-ui/customization/default-theme/


let theme = createTheme({
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


// Réutilisation de couleur de la palette : 

theme = createTheme(theme, {
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.primary.dark, // ça fonctionne !
                }
            }
        }
    }
});


export default theme;



