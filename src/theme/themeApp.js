import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const themeApp = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        tertiary:{
            main: '#FFFFFF'
        },
        error: {
            main: red.A400
        }
    }
})





